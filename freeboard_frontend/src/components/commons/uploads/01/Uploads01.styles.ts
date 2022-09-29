import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`;

export const Imgbx = styled.div`
  width: 104px;
  height: 104px;
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: center;
  vertical-align: top;
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  cursor: pointer;
  transition: border-color 0.3s;
  &&:hover {
    border-color: #1890ff;
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
