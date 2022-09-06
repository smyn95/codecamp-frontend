import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from 'react'
import {useMutation} from '@apollo/client'
import { CREATE_BOARD } from "./BoardWrite.queryes";

export default function  BoardWrite() {
  const [mycolor,setMycolor] = useState(false)

  //자바스크립트 영역
  const [writer,setWriter] = useState("")
  const [title,setTitle] = useState("")
  const [contents,setContetns] = useState("")
  const [나의함수] =  useMutation(CREATE_BOARD) //useMutation 를 import 해야 쓸 수 있다. gql도 마찬가지


  const onClickSubmit = async () => {
    //const writer = "qqq" //이 함수에 있으면 현재 스코프
    const result = await 나의함수({
      variables: { //variables 이게 $ 역할을 해줌
        writer: writer, // 이 함수에 없으면 스코프 체인을 통해서 위 함수로 들어가 찾음
        title: title,
         contents: contents
      }
    })
    console.log(result)
    alert(result.data.createBoard.message)
  }

  //onChange 함수
  const onChangeWriter = (event) => {
    setWriter(event.target.value)
    if(event.target.value && title && contents){
      setMycolor(true)
    }
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    if(writer && event.target.value && contents){
      setMycolor(true)
    }
  }

  const onChangeContents = (event) => {
    setContetns(event.target.value)
    if(writer && title && event.target.value){
      setMycolor(true)
    }
  }

  //HTML 영역(return 아래)
  return(
    <>
      <BoardWriteUI 
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        mycolor = {mycolor}
      />
    </>

  )

}