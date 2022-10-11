import { useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("React-quill"), {
  ssr: false,
}); // 서버에서 랜더링 X
export default function WebEditorPage() {
  const [value, setValue] = useState("");

  const onClickSubmit = async () => {
    const { Modal } = await import("antd");
    // 에러 발생
    Modal.success({ content: "등록에 성공하였습니다." });
  };
  return (
    <>
      <div>
        작성자: <input type="text" />
        <br />
        비밀번호: <input type="password" />
        <br />
        제목: <input type="text" />
        <br />
        내용: <ReactQuill theme="snow" value={value} onChange={setValue} />
        <br />
      </div>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
