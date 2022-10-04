import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.query";
import { IBoardListProps } from "./BoardList.types";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function FreeboardList(props: IBoardListProps) {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const [search, setSearch] = useState("");

  const onClickMoveToBoardNew = () => {
    void router.push("/board/new");
  };
  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLLIElement>) => {
    void router.push(`/board/${event.currentTarget.id}`);
  };

  const onClickPage = (event: MouseEvent<HTMLLIElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const onClickSearch = () => {
    void refetch({ search, page: 1 });
  };

  const { RangePicker } = DatePicker;

  return (
    <>
      <BoardListUI
        data={data}
        bestData={bestData}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        RangePicker={RangePicker}
        onClickPage={onClickPage}
        onChangeSearch={onChangeSearch}
        onClickSearch={onClickSearch}
      />
    </>
  );
}
