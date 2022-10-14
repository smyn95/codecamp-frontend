import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

// async 를 붙여줘야 promise가 되고 그래야 .then을 사용할 수 있다.
export const getAccessToken = async () => {
  try {
    const GraphQLClient = new GraphQLClient(
      "https://backend09.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};

// promise_옵저버블
