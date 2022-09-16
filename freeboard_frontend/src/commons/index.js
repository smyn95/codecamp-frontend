import { Modal } from "antd";

export function SuccessModal(SuccessMessge) {
  Modal.success({
    content: SuccessMessge,
  });
}

export function ErrorModal(ErrorMessage) {
  Modal.error({
    content: ErrorMessage,
  });
}
