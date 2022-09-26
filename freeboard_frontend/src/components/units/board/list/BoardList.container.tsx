import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.query";
import { IBoardListProps } from "./BoardList.types";
import { ChangeEvent, MouseEvent, useState } from "react";
// import { ChangeEvent, useState } from "react";

export default function FreeboardList(props: IBoardListProps) {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");

  // const [searchArray, setSearchArray] = useState([]);

  const onClickMoveToBoardNew = () => {
    void router.push("/board/new");
  };
  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLLIElement>) => {
    void router.push(`/board/${event.currentTarget.id}`);
  };

  const onClickPage = (event: MouseEvent<HTMLLIElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onChangeDate = () => {};
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const onClickSearch = () => {
    void refetch({ search });
  };

  const { RangePicker } = DatePicker;

  // const onChangeSearchWord = (event: ChangeEvent<HTMLInputElement>) => {
  //   const searchFilter = data?.fetchBoards.filter((list) =>
  //     list.title.toLowerCase().includes(event.target.value).toLowerCase()
  //   );
  //   setSearchArray(searchFilter);
  // };

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
