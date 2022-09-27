import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
     contents
     images
    }
  }
`;
export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const[ input, setInput] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  })

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // <input type="file" multiple /> 에서 multiple 속성으로 여러개 드래그 가능

    try {
      const result = await uploadFile({ variables: { file } });
      setImageUrl(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeInputs = (event) => {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });

  };
  const onClickSubmit = async () => {
    try{
    const result = await createBoard({
      variables: { ...input },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  }catch(error){
    alert(error.message)
  }

  };
  return (
    <>
      <input type="text" id="writer" placeholder="작성자" onChange={onChangeInputs}/>
      <input type="text" id="password" placeholder="비밀번호" onChange={onChangeInputs}/>
      <input type="text" id="title" placeholder="제목" onChange={onChangeInputs}/>
      <input type="text" id="contents" placeholder="내용" onChange={onChangeInputs}/>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}
