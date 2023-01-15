import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    const graphGLClient = new GraphQLClient(
      "https://backend09.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );

    const result = await graphGLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error)
      console.log(`restoreAccessToken Error : ${error.message}`);
  }
};
