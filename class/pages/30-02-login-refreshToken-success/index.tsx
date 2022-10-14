import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";

// loginsuccess 폴더의 index.tsx
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  // 1. 페이지 접속하면 자동으로 data에받아짐
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. 버튼 클릭시 직접 실행하면 data에 받아지고 ,리랜더링 됨
  // const {myquery,{data}} = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. axios와 동일, 리랜더링 x ,기다린 다음에 변수에 저장해서 사용
  // const client = useApolloClient();

  const client = useApolloClient(); // mutation도 가능 result에 저장가능

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickButton}>클릭하세요</button>
      {/* <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>; */}
    </>
  );
}
