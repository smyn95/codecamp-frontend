import { UseFormRegisterReturn } from "react-hook-form";
import { TestFunction } from "yup";

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  return (
    <>
      <input type={props.type} {...props.register} />
      {/* 에러메세지 컴포넌트 따로 하는게 낫지않나 */}
    </>
  );
}
