import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";
import { withAuth } from "../../../src/components/commons/example/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginHofPage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}
export default withAuth(LoginHofPage);
