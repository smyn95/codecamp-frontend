import * as S from "./loginStyles";
import { ChangeEvent, useRef, useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const focusRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [inputValueError, setInputValueError] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue2Error, setInputValue2Error] = useState("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.target.value);
    if (event.target.value !== "") {
      setInputValueError("");
    }
  };
  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event?.target.value);
    if (event.target.value !== "") {
      setInputValue2Error("");
    }
  };

  const onClickLabel = () => {
    focusRef.current?.focus();
  };

  const onClickSubmit = () => {
    if (!inputValue) {
      setInputValueError("아이디를 입력해주세요.");
    }
    if (!inputValue2) {
      setInputValue2Error("비밀번호를 입력해주세요.");
    }
    if (inputValue && inputValue2) {
    }
  };
  return (
    <>
      <S.BgLayer>
        <S.LoginModal>
          <S.BtnX>
            <img src="/ico_close.png" alt="close 아이콘" />
          </S.BtnX>
          <div>
            <img
              src="/ico_window.png"
              alt="로고 아이콘"
              style={{ width: "40px", marginBottom: "50px" }}
            />
            <S.LoginForm>
              <div>
                <S.FormInput inputValue={inputValue}>
                  {inputValueError}
                  <input
                    type="text"
                    name="tbuser_id"
                    onChange={onChangeInput}
                    required=""
                    ref={focusRef}
                  />
                  <label onClick={onClickLabel}>아이디</label>
                </S.FormInput>
                <S.FormInput
                  style={{ marginTop: "30px" }}
                  inputValue2={inputValue2}
                >
                  {inputValue2Error}
                  <input
                    type="password"
                    name="tbuser_pw"
                    onChange={onChangeInput2}
                    required=""
                    ref={focusRef}
                  />
                  <label onClick={onClickLabel}>비밀번호</label>
                </S.FormInput>
                <S.btnForm onClick={onClickSubmit}>
                  <span>LOGIN</span>
                </S.btnForm>
              </div>
            </S.LoginForm>
          </div>
          <S.BtnJoin>
            <Link href="/join">회원가입</Link>
          </S.BtnJoin>
        </S.LoginModal>
      </S.BgLayer>
    </>
  );
}
