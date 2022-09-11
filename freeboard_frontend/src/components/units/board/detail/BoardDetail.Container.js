import { useRouter } from "next/router";
import {useMutation, useQuery,gql} from '@apollo/client'
import {CREATE_BOARD_COMMENT, FETCH_BOARD, FETCH_BOARD_COMMENTS,UPDATE_BOARD_COMMENTS} from '../../../commons/BoardWrite.queryes'
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
  const {data : commentData} = useQuery(FETCH_BOARD_COMMENTS,{
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
          variables:{boardId:router.query.boardId}
        },]
      })
      console.log(result)
      console.log(result.data.createBoardComment.boardId)
      alert("댓글 등록이 완료되었습니다.")
    }catch(error){
      alert(error.message)
   } 
  }

  const onClickUpComment = async () => {
    try{
    const upvariables = {
      boardId:router.query.boardId
    }
    if(writer)upvariables.writer = comment.writer
    if(contents)upvariables.contents = comment.contents
    console.log(upvariables);

    const upresult = await updateBoardComment({
      variables:{
        boardCommentId: "",
        password:"",
        updateBoardCommentInput:{
          contents,
          rating:1
        }
      }})
      alert(upresult.data.updateBoardComment.message)
    }catch(error){
      console.log(error)
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
    setComment({...comment, contents:event.target.value})
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
      commentData={commentData}
      onClickUpComment={onClickUpComment}
      />
    </>
  )
  //부모에게는 return이 꼭 있어야함
}