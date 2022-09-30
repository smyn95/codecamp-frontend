import styled from "@emotion/styled";
import { Rate, Modal } from "antd";

export const ItemWrapper = styled.div`
  width: 1400px;
  padding: 30px 0;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    width:60px;

    }
  }
  a {
    background: #ea3d3fc7;
    width: 60px;
    height: 30px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    transition: 0.3s;
    &:hover {
      background-color: transparent;
      color: #00704a;
      border: 1px solid #00704a;
    }
  }
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
