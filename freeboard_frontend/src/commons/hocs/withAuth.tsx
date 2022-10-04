import { useRouter } from "next/router";
import { useEffect } from "react";
import { ErrorModal } from "..";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      ErrorModal("로그인을 먼저 해주세요");
      void router.push("/");
    }
  }, []);

  return <Component {...props} />;
};
