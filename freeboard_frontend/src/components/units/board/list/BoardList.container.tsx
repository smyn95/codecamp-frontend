import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.query";

export default function FreeboardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);

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
        refetch={refetch}
      />
    </>
  );
}
