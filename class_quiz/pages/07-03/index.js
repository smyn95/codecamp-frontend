import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [address,setAddress] = useState("")

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (value) => {
    console.log(address);
    onToggleModal();
    setAddress(value.address);
  }
  console.log(setAddress)
  return (
    <>
      <button onClick={onToggleModal}> 모달 열기 </button>
      <input type="text" value={address}/>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
      }
