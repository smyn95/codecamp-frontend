import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const onClikPage = async (event: MouseEvent<HTMLSpanElement>) => {
    await refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <>
      {/* 임시배열 10개를 생성하여,데이터가 없을 때도 높이 30px을 유지하여 reflow 방지 */}
      {(data?.fetchBoards ?? new Array(10).fill(1)).map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClikPage}>
          {index + 1}
        </span>
      ))}

      {/* {[1, 1, 1, 1].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClikPage}>
          {index + 1}
        </span>
      ))} */}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={String(el)} onClick={onClikPage}>
          {el}
        </span>
      ))} */}

      {/* <span id="1" onClick={onClikPage}>   1
      </span>
      <span id="2" onClick={onClikPage}>
        2
      </span>
      <span id="3" onClick={onClikPage}>
        3
      </span> */}
    </>
  );
}
