import { useState } from "react";
import { useRouter } from "next/router";
import LayoutHeader from "./header/header";
import LayoutSubBanner from "./subBanner";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../../commons/store";
import LayoutBadgePage from "./badge";

const HIDDEN_BANNER = ["/main", "/", "/join"];
const HIDDEN_RANDING = ["/"];

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenRanding = HIDDEN_RANDING.includes(router.asPath);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const [inputClass, setInputClass] = useState("test");

  const onClickText = () => {
    if (inputClass !== "") {
      setInputClass("");
    } else {
      setInputClass("focus");
    }
  };

  const onclickIsOpne = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      <LayoutBadgePage />
      {!isHiddenRanding && (
        <LayoutHeader
          inputClass={inputClass}
          onClickText={onClickText}
          isLogin={isLogin}
          onclickIsOpne={onclickIsOpne}
        />
      )}
      {!isHiddenBanner && <LayoutSubBanner />}
      <div>{props.children}</div>
    </>
  );
}
