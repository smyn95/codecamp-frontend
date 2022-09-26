import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { checkValodationFile } from "../../src/commons/libraries/validationFile";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      number
      message
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const FileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContetns] = useState("");
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer,
          Password: "1234",
          title,
          contents,
          images: [imgUrl],
        },
      },
    });
    console.log(result);
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

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple 속성으로 여러개 드래그 가능 !
    console.log(file);

    const isValid = checkValodationFile(file);
    if (!isValid) return;
    console.log(isValid);

    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result.data?.uploadFile.url);
      setImgUrl(result.data?.uploadFile.url ?? "");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    FileRef.current?.click();
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
      <div
        style={{
          width: "220px",
          height: "50px",
          background: "gray",
          color: "#fff",
          textAlign: "center",
          lineHeight: "50px",
          cursor: "pointer",
        }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        multiple={true}
        ref={FileRef}
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
