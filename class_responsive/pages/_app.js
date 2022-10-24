import Layout from '../src/components/layout';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import { GlobalStyles } from '../src/styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyles styles={GlobalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
