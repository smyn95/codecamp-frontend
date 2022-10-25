import { EllipsisOutlined } from "@ant-design/icons";
import { useQuery, gql } from "@apollo/client";
import { Pagination } from "antd";
import "antd/dist/antd.css";

import {
  IQuery,
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

  const lastPage = dataBoardsCount != null && dataBoardsCount.fetchBoardsCount;

  return (
    <>
      <Pagination
        total={lastPage}
        showSizeChanger={false}
        itemRender={(page, type) => {
          if (type === "next") {
            return <li>&gt; </li>;
          }
          if (type === "jump-prev") {
            return (
              <span>
                <EllipsisOutlined />
              </span>
            );
          }
          if (type === "prev") {
            return <li>&lt;</li>;
          }
          if (type === "jump-next") {
            return (
              <span>
                <EllipsisOutlined />
              </span>
            );
          }
          if (type === "page") {
            return (
              <li onClick={onClickPage} id={page} defaultCurrent={1}>
                {page}
              </li>
            );
          }
        }}
      />
    </>
  );
}
