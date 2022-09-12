import { useQuery,useMutation} from '@apollo/client'
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS,UPDATE_BOARD_COMMENTS} from './BoardComments.query'
import BoardCommentsUI from "./BoardComments.presenter";
import { useState } from "react"; 
import { useRouter } from "next/router";


export default function BoardComments(props){
const router = useRouter()  
const [update,setUpdate] = useState(false)
const [comment,setComment] = useState({
  writer:"",
  password:"",
  contents:""
})

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
  function onClickUpdate(){
    setUpdate(true)
  }
  console.log(onClickUpdate)


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
      <BoardCommentsUI
        onClickComment={onClickComment}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onchangeContents={onchangeContents}
        commentData={commentData}
        onClickUpComment={onClickUpComment}
        update={props.update}
        onClickUpdate={onClickUpdate}
      />
    </>

  )
}