import {
  CaretDownOutlined,
  DollarOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import LoginPage from "../../../../../pages/login";
import { accessTokenState, isLoginState } from "../../../../commons/store";

import * as S from "../../../../commons/styles";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../layout.query";

export default function LayoutHeader(props) {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [myPage, setMyPage] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  console.log(accessToken);

  const onClickMyPage = () => {
    setMyPage(!myPage);
  };
  const onclickIsOpne = () => {
    setIsLogin((prev) => !prev);
  };
  const conClickReview = () => {
    void router.push("/board");
  };

  return (
    <>
      <S.Inner>
        <S.Header>
          <S.Logo>
            <Link href="/main">
              <img src="/starbucks_logo.png" alt="스타벅스" />
            </Link>
          </S.Logo>
          <S.Navi>
            <S.Navibx>
              <li className="all_menue">전체메뉴</li>
              <li>For U</li>
              <li>베스트</li>
              <li>신상품</li>
              <li onClick={conClickReview}>리뷰</li>
              <li>이벤트</li>
            </S.Navibx>
          </S.Navi>
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
                          <p>0 &nbsp;P</p>
                        </S.UserPage>
                      </div>
                      <S.Logout>
                        <li>
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
            <S.Badge>
              <img src="/badge_01.png" alt="Badge" />
            </S.Badge>
            <S.Badge>
              <img src="/badge_02.png" alt="Badge" />
            </S.Badge>
          </S.Badges>
        </S.Header>
        {isLogin && <LoginPage onclickIsOpne={onclickIsOpne} />}
      </S.Inner>
    </>
  );
}
