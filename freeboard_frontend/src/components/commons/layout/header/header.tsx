import {
  CaretDownOutlined,
  DollarOutlined,
  LogoutOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import LoginPage from "../../../../../pages/login";
import { ErrorModal, SuccessModal } from "../../../../commons";
import { accessTokenState, isLoginState } from "../../../../commons/store";
import * as S from "../../../../commons/styles";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
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

export default function LayoutHeader(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: pickData } = useQuery(FETCH_USED_ITEMS_COUNT_I_PICKED);

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const [myPage, setMyPage] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
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
    SuccessModal("???????????????????????????.");
  };

  const { onClickMoveToPage } = useMoveToPage();
  const onClickMyPage = () => {
    setMyPage(!myPage);
  };
  const onclickIsOpne = () => {
    setIsLogin((prev) => !prev);
  };

  if (typeof window !== "undefined") {
    const myProduct = JSON.parse(localStorage.getItem("myProducts") ?? "[]");
    // const setItem = {
    //   id: router.query.detail,
    //   imageUrl: imageUrl,
    // };
  }
  useEffect(() => {
    myProduct === null
      ? localStorage.setItem("myProducts", JSON.stringify([]))
      : null;
  }, []);

  const onClickChoose = () => {
    setPayment((prev) => !prev);
  };

  const onChangeValue = (event) => {
    setChoose(true);
    setOption(event.currentTarget.value);
    console.log(event.currentTarget.value, "qqq");
  };

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    // IMP.request_pay(param, callback) ????????? ??????
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank ???
        // merchant_uid: "ORD20180131-0000011", // ????????? ???, ?????? ??????!
        name: "????????? ??????",
        amount: Number(option),
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "??????????????? ????????? ?????????",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/main", // ?????????????????? ?????????, ?????????????????? ???????????? ?????????
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          await createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          void router.push("/main");
        } else {
          ErrorModal("????????? ??????????????????! ?????? ????????? ?????????!");
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
                <img src="/market_logo.png" alt="shinmimall ??????" />
              </Link>
            </S.Logo>
            <S.Navi>
              <S.Navibx>
                {/* <li className="all_menue">????????????</li> */}
                <li onClick={onClickMoveToPage("/product/")}>????????????</li>
                <li onClick={onClickMoveToPage("/board")}>?????????</li>
              </S.Navibx>
            </S.Navi>
          </S.LeftLogo>
          <S.TopSearch className={props.inputClass}>
            {accessToken ? (
              <>
                <S.UserImg src="/avatar.png" alt="???????????????"></S.UserImg>
                <S.LoginName>{`${data?.fetchUserLoggedIn.name}`}</S.LoginName>
                <S.MyPage>
                  <CaretDownOutlined onClick={onClickMyPage} myPage={myPage} />
                  {myPage && (
                    <S.MyPageTrue>
                      <div>
                        <S.UserImg
                          src="/avatar.png"
                          alt="???????????????"
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
                          <UserOutlined /> ???????????????
                        </li>
                        <li onClick={onClickChoose}>
                          <DollarOutlined /> ????????????
                        </li>
                        <li onClick={onClickLogout}>
                          <LogoutOutlined />
                          ????????????
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
                alt="??????????????? ?????????"
              />
            )}
            {payment && (
              <PointModal
                onClickPayment={onClickPayment}
                onChangeValue={onChangeValue}
                choose={choose}
              />
            )}
            <img src="/car.svg" alt="?????? ?????????" />
            <S.CartList>
              <img src="/cart.svg" alt="???????????? ?????????" />
              <S.pickNum>{pickData?.fetchUseditemsCountIPicked}</S.pickNum>
            </S.CartList>
            {/* <input type="text" />
            <S.Material onClick={props.onClickText}>
              <img src="/search.png" alt="???????????????" />
            </S.Material> */}
          </S.TopSearch>
          <S.Badges>
            {typeof window !== "undefined" &&
              myProduct.map((a) => <S.Badge key={a}>{a}</S.Badge>)}
            <S.Badge>
              <button onClick={onClickMoveToPage("/product/new/")}>
                ???????????? &nbsp;
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
