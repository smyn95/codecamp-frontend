import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 우리가 전달할  변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const onClickSubmit = async () => {
    console.log(writer.title.contents);
    alert(result.data.createBoard.message);
  };

  //onChange 함수
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContetns(event.target.value);
  };
  //onChange 함수 E
  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
