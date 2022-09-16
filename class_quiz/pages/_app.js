import '../styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://example.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(), //나중에 하기
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
