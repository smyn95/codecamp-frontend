import { useQuery, gql } from "@apollo/client";
import { Pagination } from "antd";
import "antd/dist/antd.css";

import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationPage({ onClickPage }) {
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
      : 0;

  return (
    <>
      <Pagination
        total={dataBoardsCount?.fetchBoardsCount}
        showSizeChanger={false}
        defaultCurrent={1}
        itemRender={(page, type) => {
          if (type === "next") {
            return <li>&gt;</li>;
          }
          if (type === "prev") {
            return <li>&lt;</li>;
          }
          if (type === "page") {
            return (
              <li onClick={onClickPage} id={page}>
                {page}
              </li>
            );
          }
        }}
      />
    </>
  );
}
