import { useState } from "react";
import LayoutHeader from "./header/header";

//prettier-ignore
export default function Layout(props) {
  const [inputClass, setInputClass] = useState("test");

  const onClickText = () => {
    if (inputClass !== "") {
      setInputClass("");
    } else {
      setInputClass("focus");
    }
  };
  
  return (
    <>
      <LayoutHeader 
        inputClass={inputClass}
        onClickText={onClickText}
      />
        <div>{props.children}</div>
    </>
  );
}
