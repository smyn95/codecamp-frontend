// import "../X.styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalStyles";

// /////////////////firebase//////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2RKnYFuCLdzbuk4b80Em4LAPpKTIbAUg",
  authDomain: "codecamp09-frontend-smyn95.firebaseapp.com",
  projectId: "codecamp09-frontend-smyn95",
  storageBucket: "codecamp09-frontend-smyn95.appspot.com",
  messagingSenderId: "539855772043",
  appId: "1:539855772043:web:2269449023bbaf691d778e",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
//  /////////////////////////////////////////////////////////

function MyApp({ Component }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}

export default MyApp;
