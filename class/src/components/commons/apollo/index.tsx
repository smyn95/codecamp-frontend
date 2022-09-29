import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  inknown,
} from "@apollo/client"; // module 요즘
import { createUploadLink } from "apollo-upload-client";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
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
