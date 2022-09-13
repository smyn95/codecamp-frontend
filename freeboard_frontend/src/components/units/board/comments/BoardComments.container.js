import { useQuery,useMutation} from '@apollo/client'
import {CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS,UPDATE_BOARD_COMMENTS} from './BoardComments.query'
import BoardCommentsUI from "./BoardComments.presenter";
import { useState } from "react"; 
import { useRouter } from "next/router";


export default function BoardComments(){
const router = useRouter()  
const [update,setUpdate] = useState(false)
const [commentId, setCommentId] = useState("")
const [comment,setComment] = useState({
  password:"",
  contents:"",
  writer:""
})


const [commentPassword, setCommentPassword]= useState("")
const [commentContents, setCommentContents]= useState("")

console.log(commentPassword)

const onChangeCommentPassword = (event) => {
  setCommentPassword(event.target.value)
}
const onChangeCommentContents = (event) => {
  setCommentContents(event.target.value)
}


const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENTS)
const {data : commentData} = useQuery(FETCH_BOARD_COMMENTS,{
  variables:{boardId:router.query.boardId}
  })
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
    // const variables = {
    //   boardId:router.query.boardId
    // }

    // if(writer)upvariables.writer = commentUp.writer
    // if(contents)upvariables.contents = commentUp.contents
console.log(commentId, commentPassword, commentContents)
    await updateBoardComment({
      variables:{
        boardCommentId: commentId,
        password:commentPassword,
        updateBoardCommentInput:{
          contents : commentContents,
          rating:1
        }
      },
    refetchQueries:[{
      query:FETCH_BOARD_COMMENTS,
      variables : {
        boardId:router.query.boardId
      },
    }]
  })
  setUpdate(!update)
    }catch(error){
      console.log(error)
      alert(error.message)
    }
  }
  function onClickUpdate(event){
    setCommentId(event.currentTarget.id)
    setUpdate(!update)
  }


  const onChangeWriter = (event) => {
    setComment({...comment, writer:event.target.value})
  }
  const onChangePassword = (event) => {
    setComment({...comment, password:event.target.value})
    console.log(comment.password)
  }
  const onchangeContents = (event) => {
    setComment({...comment, contents:event.target.value})
  }


  return(
    <>
      <BoardCommentsUI
        onClickComment={onClickComment}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onchangeContents={onchangeContents}
        commentData={commentData}
        onClickUpComment={onClickUpComment}
        update={update}
        onClickUpdate={onClickUpdate}
        commentId={commentId}
        onChangeCommentPassword={onChangeCommentPassword}
        onChangeCommentContents={onChangeCommentContents}
      />
    </>

  )
}