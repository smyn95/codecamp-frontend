import "../styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ErrorModal, SuccessModal } from "../src/commons/index";

import { AppProps } from "next/app";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //나중에 하기
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;