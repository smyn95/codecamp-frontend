import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해 주세요."), //문자열에는 에러메세지 불가 아예 애초에 안됨
  title: yup.string().required("제목을 입력해 주세요."),
  password: yup.string().required("비밀번호를 입력해 주세요."),
  contents: yup.string().required("내용을 입력해 주세요."),

  // email: yup
  //   .string()
  //   .email("이메일 형식에 적합하지 않습니다.")
  //   .required("이메일은 필수 입력입니다."),
  // password: yup
  //   .string()
  //   .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
  //   .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
  //   .required("비밀번호는 필수 입력입니다."),
  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d${3,4}-\d${4}$/, "휴대폰 형식에 알마지 않습니다.")
  //   .required("휴대폰번호는 필수 입력입니다."),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <div> {formState.errors.writer?.message}</div>
      비밀번호: <input type="password" {...register("password")} />
      <div> {formState.errors.password?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div> {formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div> {formState.errors.contents?.message}</div>
      <button style={{ background: formState.isValid ? "yellow" : "" }}>
        등록하기
      </button>
    </form>
  );
}

// <button type="button">나만의버튼</button>
// <button type="submit">보내기</button> //기본값
// <button type="reset">지우지</button>
