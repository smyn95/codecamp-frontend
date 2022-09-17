import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.query";
import { ChangeEvent, useEffect, useState } from "react";

export default function FreeboardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const [search, setSearch] = useState("");

  console.log(data?.fetchBoards);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // useEffect(() => {
  //   setSearch(
  //     data.filter(
  //       (value) =>
  //         object.title.toLowerCase().includes(search.toLowerCase()) ||
  //         object.subtitle.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search]);

  const onClickMoveToBoardNew = () => {
    router.push("/board/new");
  };
  const onClickMoveToBoardDetail = (event: any) => {
    router.push(`/board/${event.currentTarget.id}`);
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
        onChangeSearch={onChangeSearch}
      />
    </>
  );
}
