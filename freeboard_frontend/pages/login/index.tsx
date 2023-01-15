import * as S from "./loginStyles";
import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { ErrorModal, SuccessModal } from "../../src/commons";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { accessTokenState, isLoginState } from "../../src/commons/store";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(props: any) {
  const router = useRouter();
  const focusRef = useRef();
  const [email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onClickLabel = () => {
    focusRef.current?.focus();
  };

  const onClickjoin = () => {
    void router.push("/join");
    setIsLogin(!isLogin);
  };

  const onClickLogin = async () => {
    try {
      // 1. 로그인 해서 accessToken 받아오기
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (setAccessToken) {
        setAccessToken(accessToken || "");
        localStorage.setItem(accessToken, "accessToken");
      }
      SuccessModal("로그인에 성공하였습니다.");
      setIsLogin(!isLogin);
    } catch (error) {
      ErrorModal(error as string);
    }
  };

  return (
    <>
      <S.BgLayer>
        <S.LoginModal>
          <S.BtnX>
            <img
              onClick={props.onclickIsOpne}
              src="/ico_close.png"
              alt="close 아이콘"
            />
          </S.BtnX>
          <div>
            <img
              src="/ico_window.png"
              alt="로고 아이콘"
              style={{ width: "40px", marginBottom: "50px" }}
            />
            <S.LoginForm>
              <div>
                <S.FormInput email={email}>
                  {EmailError}
                  <input
                    type="text"
                    name="tbuser_id"
                    onChange={onChangeEmail}
                    ref={focusRef}
                  />
                  <label onClick={onClickLabel}>Email</label>
                </S.FormInput>
                <S.FormInput style={{ marginTop: "30px" }} password={password}>
                  {passwordError}
                  <input
                    type="password"
                    name="tbuser_pw"
                    onChange={onChangePassword}
                    ref={focusRef}
                  />
                  <label onClick={onClickLabel}>passWord</label>
                </S.FormInput>
                <S.btnForm onClick={onClickLogin}>
                  <span>LOGIN</span>
                </S.btnForm>
              </div>
            </S.LoginForm>
          </div>
          <S.BtnJoin>
            <p onClick={onClickjoin}>회원가입</p>
          </S.BtnJoin>
        </S.LoginModal>
      </S.BgLayer>
    </>
  );
}
