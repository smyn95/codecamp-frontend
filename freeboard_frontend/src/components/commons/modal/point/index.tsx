import { CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Select } from "antd";
import { useState } from "react";
import { withAuth } from "../../../../commons/hocs/withAuth";

const ModalPoint = styled.div`
  width: 460px;
  height: 320px;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  h1 {
    font-weight: 700;
    font-size: 20px;
    padding: 30px 0;
  }
  & > div {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .Cancel {
    font-size: 25px;
    font-weight: 600;
    position: absolute;
    right: 30px;
    top: 20px;
  }
  button {
    color: #fff;
    height: 50px;
    width: 100%;
    margin-top: 30px;
    border-radius: 10px;
    background: #bdbdbd;
  }
`;
const BgLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
const Choose = styled.button`
  color: #fff;
  height: 50px;
  width: 100%;
  margin-top: 30px;
  border-radius: 10px;
  background: #000 !important;
`;
const Selectbx = styled.select`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  padding: 10px 0;
`;

const PointModal = (props: any) => {
  // const { Option } = Select;
  const [cancel, setCancel] = useState(false);

  const onClickCancel = () => {
    setCancel(true);
  };

  return (
    <>
      {!cancel && (
        <>
          <BgLayer></BgLayer>
          <ModalPoint>
            <CloseOutlined className="Cancel" onClick={onClickCancel} />
            <div>
              <h1>충전하실 금액을 선택해주세요!</h1>

              <Selectbx
                onChange={props.onChangeValue}
                defaultValue="포인트 선택"
              >
                <option value="100">100원</option>
                <option value="500">500원</option>
                <option value="2000">2,000원</option>
                <option value="5000">5,000원</option>
              </Selectbx>

              {!props.choose && <button type="button">충전하기</button>}
              {props.choose && (
                <Choose onClick={props.onClickPayment}>충전하기</Choose>
              )}
            </div>
          </ModalPoint>
        </>
      )}
    </>
  );
};
export default withAuth(PointModal);
