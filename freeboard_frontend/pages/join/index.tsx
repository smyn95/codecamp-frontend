import { CREATE_USER } from "./join.query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./joinStyles";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";
import { useRef, useState } from "react";
import { ErrorModal, SuccessModal } from "../../src/commons";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  name: yup.string().required("이름을 입력해주세요."),
  password: yup.string().required("비밀번호는 필수 입력입니다."),
  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니다.")
  //   .required("휴대폰은 필수 입력입니다."),
});

interface IFormData {
  name: string;
  email: string;
  password: string;
}

export default function ReactHookFormPage() {
  const router = useRouter();
  const focusJoinRef = useRef();
  const profileImg = useRef();
  const [input, setInput] = useState("");
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
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
  const onClickJoin = async (data: IFormData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      SuccessModal("회원가입이 완료되었습니다.");
      void router.push("/");
    } catch (error) {
      ErrorModal(error.message);
    }
  };

  // const { ref, ...rest } = register;
  console.log(input);
  return (
    <S.Join>
      <S.Title>SIGN UP</S.Title>
      <div className="contents">
        <S.JoinForm onSubmit={handleSubmit(onClickJoin)}>
          <S.FormInput onChange={(e) => setInput(e.target.value)}>
            <input type="text" {...register("email")} />
            <div>{formState.errors.email?.message}</div>
            <S.FormLabel onClickLabel={onClickLabel}>이메일*</S.FormLabel>
          </S.FormInput>
          <S.FormInput onChange={(e) => setInput(e.target.value)}>
            <input type="text" {...register("name")} />
            <div>{formState.errors.name?.message}</div>
            <S.FormLabel onClickLabel={onClickLabel}>이름*</S.FormLabel>
          </S.FormInput>
          <S.FormInput onChange={(e) => setInput(e.target.value)}>
            <input type="password" {...register("password")} />
            <div>{formState.errors.password?.message}</div>
            <S.FormLabel onClickLabel={onClickLabel}>비밀번호*</S.FormLabel>
          </S.FormInput>

          <S.FormFile>
            <input type="file" ref={profileImg} />
            <S.ProfileUp onClick={onClickProfile}>
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
            <S.BtnMore type="submit">
              <span>NEXT</span>
            </S.BtnMore>
          </S.BtnMorebx>
          <S.MyInfo>개인정보수집 및 이용약관에 동의 후 계속</S.MyInfo>
          <S.BtnCancel>취소하기</S.BtnCancel>
        </S.JoinForm>
      </div>
    </S.Join>
  );
}
