import { useQuery} from '@apollo/client';
import BoardListUI from '../list/BoardList.presenter'
import { useRouter } from "next/router";
import { FETCH_BOARDS } from './BoardList.query';



export default function FreeboardList(){
  const router = useRouter()  
  const {data} = useQuery(FETCH_BOARDS)

  console.log(data?.fetchBoards)

  const onClickMoveToBoardNew = () => {
    router.push("/board/new");
  };
  const onClickMoveToBoardDetail = (event) => {
    console.log(event.target.id)
    router.push(`/board/${event.target.id}`);
  };

  return(
    <>
      <BoardListUI 
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      />
    </>
  )
}
