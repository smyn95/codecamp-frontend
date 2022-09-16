import { Modal } from "antd";
import React from "react";

const success = () => {
  Modal.success({ content: "게시글 등록에 성공했습니다." });
};

const error = () => {
  Modal.error({ content: "비밀번호가 틀렸습니다." });
};

const App: React.FC = () => (
  <>
    <button onClick={success}>성공</button>
    <button onClick={error}>실패</button>
  </>
);

export default App;
