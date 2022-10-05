import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

const schema = yup.object({
  writer: yup
    .string()
    .required("작성자를 입력해주세요.")
    .max(5, "5자 이내로 적어주세요."),
  title: yup
    .string()
    .required("제목을 입력해주세요.")
    .max(100, "100자 이내로 적어주세요."),
  contents: yup
    .string()
    .required("내용을 입력해주세요.")
    .max(1000, "1000자 이내로 적어주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{3,8}$/,
      "영문, 숫자, 특수문자를 포함한 8자 이내로 입력해주세요."
    )
    .required("필수 입력란입니다."),
});

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <Input01 type="text" register={register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      제목: <Input01 type="text" register={register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <Input01 type="text" register={register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      비밀번호: <Input01 type="password" register={register("password")} />
      <div>{formState.errors.password?.message}</div>
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}
