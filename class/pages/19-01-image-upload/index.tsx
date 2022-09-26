import { gql, useMutation } from "@apollo/client";
import { message } from "antd";
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

export default function ImageUploadPage() {
  const [imgUrl, setImgUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple 속성으로 여러개 드래그 가능 !
    console.log(file);

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

  return (
    <>
      <input type="file" onChange={onChangeFile} multiple={true} />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </>
  );
}
