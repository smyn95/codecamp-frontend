import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  inknown,
} from "@apollo/client"; // module 요즘
import { createUploadLink } from "apollo-upload-client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1.프리렌더링 예제 - proccess.browser 방법
  if (process.browser) {
    //   console.log("브라우저");
    //   // const result = localStorage.getItem("accessToken");
    //   // setAccessToken(result);
  } else {
    //   console.log("프론트엔드 서버(즉, yarn dev로 실행시킨 프로그램 내부)");
    //   // const result = localStorage.getItem("accessToken");
    //   // setAccessToken(result);
  }

  // 2. 프리렌더링 예제 - typeof window 방법

  if (typeof window !== "undefined") {
    //   console.log("브라우저");
    //   // const result = localStorage.getItem("accessToken");
    //   // setAccessToken(result);
  } else {
    //   console.log("프론트엔드 서버(즉, yarn dev로 실행시킨 프로그램 내부)");
    //   // const result = localStorage.getItem("accessToken");
    //   // setAccessToken(result);
  }

  // 3. 프리렌더링 무시 - useEffect
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    if (result) setAccessToken(result);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as inknown as ApolloLink]),
    // cache: new InMemoryCache(), // GlobalState 부분
    cache: GLOBAL_STATE, //페이지 전환(_app.tsx 리렌더) 되어도, 캐시 유지
  });

  // prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
