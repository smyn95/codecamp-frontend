import { useRef, useState } from "react";
import * as S from "./joinStyles";

export default function JoinPage() {
  const focusJoinRef = useRef();

  const onClickLabel = () => {
    focusJoinRef.current?.focus();
  };

  const [input, setInput] = useState({
    name: "",
    id: "",
    password: "",
    email: "",
  });

  const onChangeJoinInput = (event: any) => {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });
  };
  const onClickJoin = async () => {};
  return (
    <>
      <S.Join>
        <S.Title>SIGN UP</S.Title>

        <div class="contents">
          <S.JoinForm>
            <S.FormInput>
              <input
                type="text"
                id="name"
                name="tbuser_name"
                required=""
                onChange={onChangeJoinInput}
                ref={focusJoinRef}
              />
              <S.FormLabel onClick={onClickLabel} for="tbuser_name">
                이름*
              </S.FormLabel>
            </S.FormInput>

            <S.FormInput>
              <input
                type="text"
                id="id"
                name="tbuser_id"
                required=""
                onChange={onChangeJoinInput}
                ref={focusJoinRef}
              />
              <S.FormLabel onClick={onClickLabel} for="tbuser_id">
                아이디*
              </S.FormLabel>
            </S.FormInput>

            <S.FormInput>
              <input
                type="password"
                id="password"
                name="tbuser_pw"
                required=""
                onChange={onChangeJoinInput}
                ref={focusJoinRef}
              />
              <S.FormLabel onClick={onClickLabel} for="tbuser_pw">
                비밀번호*
              </S.FormLabel>
            </S.FormInput>

            <S.FormInput>
              <input
                type="text"
                id="email"
                name="tbuser_email"
                required=""
                onChange={onChangeJoinInput}
                ref={focusJoinRef}
              />
              <S.FormLabel onClick={onClickLabel} for="tbuser_email">
                이메일*
              </S.FormLabel>
            </S.FormInput>

            <S.PreviewImg>
              <div class="img">
                <span></span>
              </div>
              <p class="fileName"></p>
            </S.PreviewImg>

            <S.BtnMorebx>
              <S.BtnMore onClick={onClickJoin}>
                <span>NEXT</span>
              </S.BtnMore>
            </S.BtnMorebx>

            <S.MyInfo>개인정보수집 및 이용약관에 동의 후 계속</S.MyInfo>
            <S.BtnCancel>취소하기</S.BtnCancel>
          </S.JoinForm>
        </div>
      </S.Join>
    </>
  );
}
