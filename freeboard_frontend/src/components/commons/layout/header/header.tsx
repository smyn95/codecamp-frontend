import {
  CaretDownOutlined,
  DollarOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import LoginPage from "../../../../../pages/login";
import { ErrorModal, SuccessModal } from "../../../../commons";
import {
  accessTokenState,
  badgeCountState,
  isLoginState,
} from "../../../../commons/store";
import * as S from "../../../../commons/styles";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import PointModal from "../../modal/point";
import {
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USED_ITEMS_COUNT_I_PICKED,
  LOGOUT_USER,
} from "../layout.query";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function LayoutHeader(props: any) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: pickData } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_COUNT_I_PICKED, {
    variables: {
      search: "",
      page: 1,
    },
  });

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const [myPage, setMyPage] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [badgeCount, setBadgeCount] = useRecoilState(badgeCountState);
  const [payment, setPayment] = useState(false);
  const [choose, setChoose] = useState(false);
  const [option, setOption] = useState("");

  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogout = async () => {
    await logoutUser();
    localStorage.removeItem("refreshToken");
    // removeCookie('refreshToken', { path: '/' });
    setAccessToken("");
    void router.push("/main");
    SuccessModal("로그아웃되었습니다.");
  };

  useEffect(() => {
    const baskets = JSON.parse(String(localStorage.getItem("baskets")));
    setBadgeCount(baskets?.length || "0");
  }, []);

  const { onClickMoveToPage } = useMoveToPage();
  const onClickMyPage = () => {
    setMyPage(!myPage);
  };
  const onclickIsOpne = () => {
    setIsLogin((prev) => !prev);
  };

  const onClickChoose = () => {
    setPayment((prev) => !prev);
  };

  const onChangeValue = (event: ChangeEvent<HTMLOptionElement>) => {
    setChoose(true);
    setOption(event.currentTarget.value);
  };

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank 등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨!
        name: "포인트 충전",
        amount: Number(option),
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/main", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
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
                          <p>
                            {data?.fetchUserLoggedIn.userPoint.amount || 0}{" "}
                            &nbsp; P
                          </p>
                        </S.UserPage>
                      </div>
                      <S.Logout>
                        <li onClick={onClickMoveToPage("/myPage/sell")}>
                          <UserOutlined /> 마이페이지
                        </li>
                        <li onClick={onClickChoose}>
                          <DollarOutlined /> 충전하기
                        </li>
                        <li onClick={onClickLogout}>
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
            {payment && (
              <PointModal
                onClickPayment={onClickPayment}
                onChangeValue={onChangeValue}
                choose={choose}
              />
            )}
            <img src="/car.svg" alt="배송 아이콘" />
            <S.CartList>
              <img src="/cart.svg" alt="장바구니 아이콘" />
              {pickData?.fetchUseditemsCountIPicked && (
                <S.pickNum>{pickData?.fetchUseditemsCountIPicked}</S.pickNum>
              )}
            </S.CartList>
          </S.TopSearch>
        </S.Header>
        {isLogin && <LoginPage onclickIsOpne={onclickIsOpne} />}
      </S.Inner>
    </>
  );
}
