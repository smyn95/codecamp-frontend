import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ErrorModal } from "..";
import { getAccessToken } from "../libraries/getAccessToken";
import { accessTokenState } from "../store";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      void getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          ErrorModal("로그인을 먼저 해주세요");
          void router.push("/main");
        }
      });
    }
  }, []);

  return <Component {...props} />;
};
