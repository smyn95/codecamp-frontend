import { useMutation, useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.query";

export default function FreeboardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  console.log(data?.fetchBoards);

  const onClickMoveToBoardNew = () => {
    router.push("/board/new");
  };
  const onClickMoveToBoardDetail = (event) => {
    console.log(event.target.id);
    router.push(`/board/${event.currentTarget.id}`);
  };

  const onClickMoveToBest = (event) => {
    router.push(`/board/${event.target.boardId}`);
  };

  const showTotal = (total) => `Total ${total} items`;
  const { RangePicker } = DatePicker;

  return (
    <>
      <BoardListUI
        data={data}
        bestData={bestData}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        onClickMoveToBest={onClickMoveToBest}
        showTotal={showTotal}
        RangePicker={RangePicker}
      />
    </>
  );
}
