import { useRouter } from "next/router";
import {useQuery} from '@apollo/client'
import {FETCH_BOARD} from '../../../commons/BoardWrite.queryes'
import BoardDetailUI from "../detail/BoardDetail.Presenter";

export default function Fetchboard(){
  const router = useRouter()  
  const {data} = useQuery(FETCH_BOARD,{
    variables:{boardId:router.query.boardId} 
  })

  console.log(router.query.boardId)

  console.log(data)

  return(
    <>
      <BoardDetailUI data={data} />
    </>
  )
  //부모에게는 return이 꼭 있어야함
}