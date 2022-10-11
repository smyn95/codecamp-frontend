import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  console.log(data);

  return (
    <div>
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      {process.browser ? (
        <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      ) : (
        <div style={{ color: "green" }} />
      )}
      <div style={{ color: "blue" }}>내용: 반갑습니다!</div>
    </div>
  );
}
