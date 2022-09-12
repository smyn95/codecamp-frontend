import { useRouter } from "next/router";
import { useQuery} from '@apollo/client'
import BoardDetailUI from "../detail/BoardDetail.Presenter";
import { FETCH_BOARD } from "./BoardDetail.query";


export default function Fetchboard(props){
  const router = useRouter()  
  const {data} = useQuery(FETCH_BOARD,{
    variables:{boardId:router.query.boardId} 
  })

  
    const onClickMoveToBoard = () => {
    router.push("/board/");
  };
  const goEdit = () => {
    router.push(`/board/${router.query.boardId}/edit`)
  }
  
 

  return(
    <>
      <BoardDetailUI 
      onClickMoveToBoard={onClickMoveToBoard}
      goEdit={goEdit}
      updateData={props.data}
      data={data}
      />
    </>
  )
  //부모에게는 return이 꼭 있어야함
}