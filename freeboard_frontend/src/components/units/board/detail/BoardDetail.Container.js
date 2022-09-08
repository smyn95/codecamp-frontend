import { useRouter } from "next/router";
import {useQuery} from '@apollo/client'
import {FETCH_BOARD} from '../../../commons/BoardWrite.queryes'
import BoardDetailUI from "../detail/BoardDetail.Presenter";

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
  //상세보기페이지에서 수정하기를 누르면 수정이 되는 로직
 
  return(
    <>
      <BoardDetailUI data={data}
      onClickMoveToBoard={onClickMoveToBoard}
      goEdit={goEdit}
      updateData={props.data}
      />
    </>
  )
  //부모에게는 return이 꼭 있어야함
}