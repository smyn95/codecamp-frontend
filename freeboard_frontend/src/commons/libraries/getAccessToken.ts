import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

export const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend09.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken?.accessToken;
    sessionStorage.setItem("accessToken", newAccessToken);

    console.log(graphQLClient);
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
