import Freeboard from "../../../../src/components/units/board/write/BoardWrite.Container";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.query";

export default function BoardsEditPage(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  return <Freeboard isEdit={true} data={data} />;
}
