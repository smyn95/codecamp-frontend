import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import "antd/dist/antd.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달 열기
      </Button>
      <Modal title="게시글 등록" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>게시글이 등록되었습니다.</p>

      </Modal>
    </>
  );
};

export default App;