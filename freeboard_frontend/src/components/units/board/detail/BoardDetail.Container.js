import { useRouter } from "next/router";
import {useMutation, useQuery} from '@apollo/client'
import {CREATE_BOARD_COMMENT, FETCH_BOARD, FETCH_BOARD_COMMENTS} from '../../../commons/BoardWrite.queryes'
import BoardDetailUI from "../detail/BoardDetail.Presenter";
import { useState } from "react";

export default function Fetchboard(props){
  const router = useRouter()  
  const {data} = useQuery(FETCH_BOARD,{
    variables:{boardId:router.query.boardId} 
  })

  const [comment,setComment] = useState({
    writer:"",
    password:"",
    contents:""
  })


  // const [createBoard] =  useMutation(CREATE_BOARD) 왜있지?
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
  const {commentdata} = useQuery(FETCH_BOARD_COMMENTS,{
    variables:{boardId:router.query.boardId}
  })


  const onClickMoveToBoard = () => {
    router.push("/board/");
  };
  const goEdit = () => {
    router.push(`/board/${router.query.boardId}/edit`)
  }
  


  const onClickComment = async () => {
    try{
      const result = await createBoardComment({
        variables:{
          createBoardCommentInput:{
            writer:comment.writer,
            password:comment.password,
            contents:comment.contents,
            rating: 5,
          },
          boardId:router.query.boardId,
        },
        refetchQueries:[{
          query: FETCH_BOARD_COMMENTS,
          variables:{boardId:router.query._id}
        },]
      })
      console.log(result.data.createBoardComment._id)
      alert("댓글 등록이 완료되었습니다.")
    }catch(error){
      alert(error.message)
   } 
  }

  const onChangeWriter = (event) => {
    setComment({...comment, writer:event.target.value})
  }
  const onChangePassword = (event) => {
    setComment({...comment, password:event.target.value})
  }
  const onchangeContents = (event) => {
    setComment({...comment, password:event.target.value})
  }

  return(
    <>
      <BoardDetailUI 
      data={data}
      onClickMoveToBoard={onClickMoveToBoard}
      goEdit={goEdit}
      updateData={props.data}
      onClickComment={onClickComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onchangeContents={onchangeContents}
      commentdata={commentdata}
      />
    </>
  )
  //부모에게는 return이 꼭 있어야함
}