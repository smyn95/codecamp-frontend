import { PlusOutlined } from "@ant-design/icons";
import * as S from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      {props.imgUrlIndex ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.imgUrlIndex}`}
        />
      ) : (
        <S.Imgbx onClick={props.onClickUpload}>
          <div>
            <PlusOutlined />
            <span>Upload</span>
          </div>
        </S.Imgbx>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
