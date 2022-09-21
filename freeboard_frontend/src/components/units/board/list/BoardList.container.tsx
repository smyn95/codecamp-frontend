import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.query";
// import { ChangeEvent, useState } from "react";

export default function FreeboardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  // const [searchArray, setSearchArray] = useState([]);

  const onClickMoveToBoardNew = () => {
    router.push("/board/new");
  };
  const onClickMoveToBoardDetail = (event: any) => {
    router.push(`/board/${event.currentTarget.id}`);
  };

  const onClickPage = (event) => {
    void refetch({ page: Number(event.currentTarget.id) });
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
      />
    </>
  );
}
