import { useQuery, gql } from "@apollo/client";
import { Pagination } from "antd";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import { FETCH_BOARDS } from "../../units/board/list/BoardList.query";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationPage(refetch) {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  console.log(data?.fetchBoards);

  // const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
  //   void refetch({ page: Number(event.currentTarget.id) });
  // };

  const onClickPage = (page: any) => {
    console.log("page", page);
    refetch({ page: Number(page) });
  };
  return (
    <>
      <Pagination total={50} onChange={onClickPage} />
    </>
  );
}
