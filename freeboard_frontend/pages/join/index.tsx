import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { ErrorModal, SuccessModal } from "../../src/commons";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";
import { CREATE_USER } from "./join.query";
import * as S from "./joinStyles";

export default function JoinPage() {
  const router = useRouter();
  const focusJoinRef = useRef();
  const profileImg = useRef();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickLabel = () => {
    focusJoinRef.current?.focus();
  };
  const onClickProfile = () => {
    profileImg.current?.click();
  };

  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
  });

  const onChangeJoinInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });
  };

  const onClickJoin = async () => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: input.name,
            password: input.password,
            email: input.email,
          },
        },
      });
      SuccessModal("회원가입이 완료되었습니다.");
      void router.push("/");
    } catch (error) {
      ErrorModal(error.message);
    }
  };
  return (
    <>
      <S.Join>
        <S.Title>SIGN UP</S.Title>

        <div class="contents">
          <S.JoinForm>
            <S.FormInput email={input.email}>
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

            <S.FormInput name={input.name}>
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

            {/* <S.FormInput>
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
            </S.FormInput> */}

            <S.FormInput password={input.password}>
              <input
                type="password"
                id="password"
                required=""
                onChange={onChangeJoinInput}
                ref={focusJoinRef}
              />
              <S.FormLabel onClick={onClickLabel} for="tbuser_pw">
                비밀번호*
              </S.FormLabel>
            </S.FormInput>

            <S.FormFile>
              <input type="file" id="" name="" ref={profileImg} />
              <S.ProfileUp for="" onClick={onClickProfile}>
                <span>프로필 사진 등록</span>
              </S.ProfileUp>
            </S.FormFile>
            <S.Info>
              댓글 등록시 나타납니다. 꼭 얼굴 사진이 아니여도 좋아요
            </S.Info>
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
