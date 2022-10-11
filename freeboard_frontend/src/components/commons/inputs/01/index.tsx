import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type: "text" | "password" | "number";
  register: UseFormRegisterReturn;
  placeholder: any;
}

export default function Input01(props: IProps) {
  return (
    <input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
}
