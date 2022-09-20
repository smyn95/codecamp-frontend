import '../styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import 'antd/dist/antd.css';
import Layout from '../src/components/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://backend09.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloProvider>
  );
}

export default MyApp;
