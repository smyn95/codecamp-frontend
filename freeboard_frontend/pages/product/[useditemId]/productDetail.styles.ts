import styled from "@emotion/styled";
import { Rate, Carousel } from "antd";

export const Product = styled.div`
  width: 1400px;
  padding: 30px 0;
  margin: 0 auto;
  & .flexBox {
    display: flex;
    justify-content: space-between;
  }
`;
export const Box = styled.div`
  width: 55%;
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
export const ImageBox = styled(Carousel)`
  height: 550px;
  width: 550px;
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid #2fcab0;
`;
export const ImgDetail = styled.img`
  width: 550px;
  border-radius: 8px;
  position: relative;
  min-width: 100%;
  color: transparent;
  height: 100%; ;
`;
export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 30px 0 10px 0;
`;
export const Leftbx = styled.div`
  display: flex;
`;
export const UserProfile = styled.img`
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
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
  clear: both;
`;

export const Remarks = styled.span`
  color: #bdbdbd;
  font-size: 18px;
  font-weight: 500;
`;
export const ProductName = styled.li`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
`;
export const ProductPrice = styled.p`
  line-height: 26px;
  font-weight: bold;
  float: right;
  font-size: 20px;
  letter-spacing: -0.1px;
`;
export const Attention = styled.button`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  color: #333;
  width: 100%;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 400;
  svg {
    font-size: 30px;
    margin-right: 15px;
    color: red;
  }
`;
// 본문
export const Detail = styled.main`
  margin: 40px 0;
  border: none;
  & > div {
    background: transparent;
    border: none;
    & > div {
      font-size: 16px 0px 16px 16px;
    }
  }
  p {
    border: none;
    font-size: 17px;
    line-height: 1.6;
    letter-spacing: -0.15px;
    margin: 16px 0;
    word-break: break-all;
    min-height: 150px;
    max-height: 400px;
    overflow: auto;
    & > h1 {
      border: none;
    }
  }
  h1 {
    line-height: 22px;
    padding-bottom: 12px;
    font-size: 18px;
    letter-spacing: -0.27px;
    border-bottom: 1px solid #d9d9d9;
    font-weight: bold;
  }
`;

export const Tags = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  span {
    margin: 4px 10px 0 0;
    font-size: 13px;
    line-height: 1.46;
    letter-spacing: -0.6px;
    background: yellow;
    padding: 5px 15px;
    color: #000;
    border-radius: 10px;
  }
  button {
    background: gray;
    color: #fff;
    width: 100px;
    font-size: 16px;
    transition: 0.3s;
    height: 50px;
    &:hover {
      filter: opacity(0.7);
    }
    &:last-of-type {
      margin-left: 15px;
      background: #ef6253;
    }
  }
`;

// 버튼
export const DetailBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  button {
    height: 60px;
    border-radius: 10px;
    color: #fff;
    width: 50%;
    font-size: 20px;
    font-weight: 500;
  }

  button.buy {
    background-color: #ef6253;
    font-weight: 500;
  }
  button.cart {
    background-color: #41b979;
    margin-left: 10px;
  }
`;

export const Kakaomap = styled.div`
  margin: 0 auto;
  & > div {
    width: 100%;
    height: 360px !important;
  }
`;

export const Star = styled(Rate)``;

export const Address = styled.p`
  padding: 10px 10px;
  background: aliceblue;
  text-align: right;
  font-size: 16px;
  font-weight: 500;
`;
