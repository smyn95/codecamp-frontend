// import "../X.styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
// import Head from "next/head";

function MyApp({ Component }: AppProps) {
  return (
    <>
      {/* <Head> // 모든 페이지에서 카카오맵을 다운로드 받음으로 비효율적임
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4f0c1b881c4e4d3687061eaa18c7b05f"
        ></script>
      </Head> */}

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
    </>
  );
}

export default MyApp;
