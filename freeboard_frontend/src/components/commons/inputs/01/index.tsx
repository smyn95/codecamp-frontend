import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type: "text" | "password" | "number" | "any";
  register: UseFormRegisterReturn;
  placeholder: any;
  readOnly: any;
  onChange: any;
}

export default function Input01(props: IProps) {
  return (
    <input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      onChange={props.onChange}
    />
  );
}
