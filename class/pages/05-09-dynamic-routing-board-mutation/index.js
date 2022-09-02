import { useState } from 'react'
import {gql,useMutation} from '@apollo/client'
import { useRouter } from "next/router";


const CREATE_BOARD = gql `
  mutation createBoard($writer:String, $title:String, $contents: String){  #타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents){   # 실제 우리가 전달할  변수 적는 곳
      _id
      number
      message
    }
  }
`
export default function GraphqlMutationPage(){
  const router = useRouter()

  const [writer,setWriter] = useState("")
  const [title,setTitle] = useState("")
  const [contents,setContetns] = useState("")
  const [나의함수] =  useMutation(CREATE_BOARD) //useMutation 를 import 해야 쓸 수 있다. gql도 마찬가지


  const onClickSubmit = async () => {
    try{
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
    console.log(result.data.createBoard.number)
    // router.push("/05-10-dynamic-routed-board-mutation/" + result.data.createBoard.message)
    router.push(`/05-10-dynamic-routed-board-mutation/ ${result.data.createBoard.number}`) //위에 더하기를 생략한것과 같음
    } catch (errer){
      //try에 있는 내용을 시도하다가 실패하면, 아랫줄 모두 무시 !!! 하고 catch가 실행됨
      console.log(error.message)
      alert(error.message)

    }
 }

  //onChange 함수
  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setContetns(event.target.value)
  }
  //onChange 함수 E
  return(
    <>
      작성자: <input type="text" onChange={onChangeWriter}/><br/>
      제목: <input type="text" onChange={onChangeTitle}/><br/>
      내용: <input type="text" onChange={onChangeContents}/><br/>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  )

}