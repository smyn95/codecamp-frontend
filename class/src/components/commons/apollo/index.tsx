import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client"; // module 요즘
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

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
    // 1. 기존방식(refreshToken 이전방식)
    const result = localStorage.getItem("accessToken");
    if (result) setAccessToken(result);

    // 2. 새로운방식 (refreshToken 이후방식)
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // fromPromise = promise를 옵저버블로 변경하는 함수
          return fromPromise(
            // 2-1. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급 받은 accessToken 저장하기 , GlobalState에 저장
              setAccessToken(newAccessToken);
              // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리의 정보 수정하기
              // getContext() // 방금 실패한 정보들
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                Headers: {
                  ...operation.getContext().headers, // 만료된 토큰이 추가되어 있는 상태, 스프레드연산자 !
                  Authorization: `Bearer ${newAccessToken}`, // accessToken만 새걸로 바꿔치기
                },
              });
            })
            // 3-2. 방금 수정한 쿼리 재요청 하기
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // cache: new InMemoryCache(), // GlobalState 부분
    cache: GLOBAL_STATE, //페이지 전환(_app.tsx 리렌더) 되어도, 캐시 유지
    connectToDevTools: true,
  });

  // prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
