import styled from "@emotion/styled";
import { Rate } from "antd";

export const Product = styled.div`
  width: 1400px;
  padding: 30px 0;
  margin: 0 auto;
`;
export const Box = styled.div`
  width: 100%;
  box-shadow: 0px 0px 9px #ccc;
  padding: 50px;
  margin-bottom: 30px;
`;
export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px 0 30px 0;
`;
export const Leftbx = styled.div`
  display: flex;
`;
export const Namebx = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const Name = styled.p`
  font-size: 24px;
  margin: 0 0 5px 0;
`;
export const Date = styled.span`
  color: #bdbdbd;
  font-size: 16px;
`;
export const Right = styled.div`
  height: 35px;
  img {
    margin-right: 20px;
    vertical-align: text-bottom;
  }
`;
export const Icon = styled.img`
  height: 35px;
  cursor: pointer;
`;

// 제품 정보
export const ProductInfo = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Remarks = styled.span`
  color: #bdbdbd;
  font-size: 18px;
  font-weight: 500;
`;
export const ProductName = styled.li`
  font-size: 24px;
  font-weight: 600;
`;
export const ProductPrice = styled.li`
  font-size: 36px;
  font-weight: 600;
`;
export const Attention = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    font-size: 30px;
  }

  span {
    font-size: 18px;
  }
`;

// 본문
export const Detail = styled.main``;

export const Tags = styled.div`
  span {
    color: #bdbdbd;
    font-size: 16px;
    padding-right: 15px;
  }
`;

export const MapAPI = styled.div``;

export const DetailBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 30px;
  button {
    border-radius: 10px;
    background: #00704a;
    color: #fff;
    width: 100px;
    height: 50px;
    font-weight: 500;
    text-align: center;
    line-height: 50px;
    margin-right: 10px;
    cursor: pointer;
    &:last-of-type {
      background: #ff4d4f;
    }
    &:hover {
      filter: opacity(0.7);
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

// 댓글
export const PencilIcon = styled.img``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
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
  margin-top: 60px;
`;
export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;
export const Reviewinfo = styled.div`
  display: flex;
  margin: 30px 0;
  align-items: center;
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

export const Contents = styled.textarea`
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
export const Star = styled(Rate)``;
