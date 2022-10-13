import {
  CaretDownOutlined,
  DollarOutlined,
  LogoutOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import LoginPage from "../../../../../pages/login";
import { ErrorModal } from "../../../../commons";
import { accessTokenState, isLoginState } from "../../../../commons/store";
import * as S from "../../../../commons/styles";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import {
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_LOADING,
} from "../layout.query";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function LayoutHeader(props) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const [myPage, setMyPage] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const onClickMyPage = () => {
    setMyPage(!myPage);
  };
  const onclickIsOpne = () => {
    setIsLogin((prev) => !prev);
  };
  if (typeof window !== "undefined") {
    const myProduct = JSON.parse(localStorage.getItem("myProducts") ?? "[]");
  }
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    myProduct === null
      ? localStorage.setItem("myProducts", JSON.stringify([]))
      : null;
  }, []);

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp84275262");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank 등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨!
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/main", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          await createPointTransactionOfLoading({
            variables: { impUid },
          });
          void router.push("/main");
        } else {
          ErrorModal("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Inner>
        <S.Header>
          <S.LeftLogo>
            <S.Logo>
              <Link href="/main">
                <img src="/market_logo.png" alt="shinmimall 로고" />
              </Link>
            </S.Logo>
            <S.Navi>
              <S.Navibx>
                {/* <li className="all_menue">전체메뉴</li> */}
                <li onClick={onClickMoveToPage("/product/")}>중고거래</li>
                <li onClick={onClickMoveToPage("/board")}>게시판</li>
              </S.Navibx>
            </S.Navi>
          </S.LeftLogo>
          <S.TopSearch className={props.inputClass}>
            {accessToken ? (
              <>
                <S.UserImg src="/avatar.png" alt="유저아이콘"></S.UserImg>
                <S.LoginName>{`${data?.fetchUserLoggedIn.name}`}</S.LoginName>
                <S.MyPage>
                  <CaretDownOutlined onClick={onClickMyPage} myPage={myPage} />
                  {myPage && (
                    <S.MyPageTrue>
                      <div>
                        <S.UserImg
                          src="/avatar.png"
                          alt="유저아이콘"
                        ></S.UserImg>
                        <S.UserPage>
                          {`${data?.fetchUserLoggedIn.name}`}
                          <p>{data?.fetchUserLoggedIn.userPoint} &nbsp;P</p>
                        </S.UserPage>
                      </div>
                      <S.Logout>
                        <li onClick={onClickPayment}>
                          <DollarOutlined /> 충전하기
                        </li>
                        <li>
                          <LogoutOutlined />
                          로그아웃
                        </li>
                      </S.Logout>
                    </S.MyPageTrue>
                  )}
                </S.MyPage>
              </>
            ) : (
              <S.Login
                onClick={props.onclickIsOpne}
                src="/mypage.svg"
                alt="마이페이지 아이콘"
              />
            )}
            <img src="/car.svg" alt="배송 아이콘" />
            <img src="/cart.svg" alt="장바구니 아이콘" />
            <input type="text" />
            <S.Material onClick={props.onClickText}>
              <img src="/search.png" alt="검색아이콘" />
            </S.Material>
          </S.TopSearch>
          <S.Badges>
            {typeof window !== "undefined" &&
              myProduct.map((a) => <S.Badge key={a}>{a}</S.Badge>)}
            <S.Badge>
              <button onClick={onClickMoveToPage("/product/new/")}>
                상품등록 &nbsp;
                <PlusOutlined />
              </button>
            </S.Badge>
          </S.Badges>
        </S.Header>
        {isLogin && <LoginPage onclickIsOpne={onclickIsOpne} />}
      </S.Inner>
    </>
  );
}
