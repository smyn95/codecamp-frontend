import Freeboard from "../../../../src/components/units/board/write/BoardWrite.Container";

import { FETCH_BOARD } from "../../../../src/components/commons/BoardWrite.queryes";
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';



export default function BoardsEditPage(props) {

  const router = useRouter()

  const {data} = useQuery(FETCH_BOARD, {
    variables : {
      boardId : router.query.boardId
    }
  })
  return <Freeboard isEdit={true} data={data} update={true}/>;
}
