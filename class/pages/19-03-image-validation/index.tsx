import { gql, useMutation } from "@apollo/client";
import { message } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkValodationFile } from "../../src/commons/libraries/validationFile";
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
  const FileRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple 속성으로 여러개 드래그 가능 !
    console.log(file);

    const isValid = checkValodationFile(file);
    if (!isValid) return;

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
  return (
    <>
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
    </>
  );
}
