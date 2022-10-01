import "../styles/globals.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/ globalStyles";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";

function MyApp({ Component }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
