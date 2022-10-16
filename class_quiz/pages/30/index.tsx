import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return (
    <button onClick={onClickButton}>클릭하세요</button>
    // <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>
  );
}
