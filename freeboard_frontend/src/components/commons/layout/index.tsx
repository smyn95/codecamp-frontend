import { useState } from "react";
import { useRouter } from "next/router";
import LayoutHeader from "./header/header";
import LayoutSubBanner from "./subBanner";

const HIDDEN_BANNER = ["/board", "/"];

//prettier-ignore
export default function Layout(props) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

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
      {!isHiddenBanner &&<LayoutHeader 
        inputClass={inputClass}
        onClickText={onClickText}
      />}
      {!isHiddenBanner && <LayoutSubBanner/>}
        <div>{props.children}</div>
    </>
  );
}
