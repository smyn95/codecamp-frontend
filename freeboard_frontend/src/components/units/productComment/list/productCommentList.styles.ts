import styled from "@emotion/styled";
import { Rate, Modal } from "antd";

export const Product = styled.div`
  width: 1400px;
  padding: 30px 0;
  margin: 0 auto;
  & .flexBox {
    display: flex;
    justify-content: space-between;
  }
`;
export const Font = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  width: 200px;
  color: #111;
  text-align: left;
  border-radius: 5px;
  padding: 5px 0;
  font-family: "Nanum Myeongjo", serif;
`;
export const ItemWrapper = styled.div`
  width: 1400px;
  padding: 30px 0 0 0;
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
    width: 40px;
    font-size: 25px;
    cursor: pointer;
    color: #2fcab0;
  }
  p {
    width: 40px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: #2fcab0;
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
// 댓글
export const PencilIcon = styled.img``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;
export const Reviewinfo = styled.div`
  margin: 30px 0;
  input {
    margin-right: 30px;
    width: 300px;
  }
  img {
    height: 20px;
    vertical-align: text-bottom;
  }
`;
export const Input = styled.input`
  height: 50px;
  outline: none;
  border: 1px solid transparent;
  padding: 0 15px;
  border-bottom: 1px solid #777;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.5;
`;

export const CommntContents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
  background-color: #00704a;
`;
export const Answer = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px 15px 0;
  cursor: pointer;
  font-weight: 600;
  color: #2fcab0;
  font-size: 16px;
  svg {
    font-size: 18px;
    font-weight: 600;
  }
`;

// ReComment
export const Recomment = styled.div`
  width: 1300px;
  padding: 20px 0;
  margin: 0 auto;
  margin-top: 15px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border: none;
  }
`;
