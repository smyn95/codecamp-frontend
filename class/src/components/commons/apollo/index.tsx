import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  inknown,
} from "@apollo/client"; // module 요즘
import { createUploadLink } from "apollo-upload-client";

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as inknown as ApolloLink]),
    cache: new InMemoryCache(), // 나중에하기
  });

  // prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
