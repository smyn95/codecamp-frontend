import styled from "@emotion/styled";

export const Board = styled.div`
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
export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #e0e0e0;
  font-family: "Libre Bodoni", serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 30px;
`;
export const DetailTitle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  color: #111;
  text-align: left;
  letter-spacing: 3px;
  margin-top: 30px;
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
export const Content = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  border: 2px solid #777;
  resize: none;
  opacity: 0.5;
`;
export const Font = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 200px;
  color: #111;
  text-align: left;
  border-radius: 5px;
  padding: 5px 0;
  font-family: "Nanum Myeongjo", serif;
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
export const User = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #828282;
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

////본문
export const Contents = styled.img`
  width: 1100px;
  margin: 50px auto;
  display: block;
`;
export const Textcontent = styled.p`
  padding-top: 10px;
  font-size: 18px;
  min-height: 200px;
`;
export const Youtube = styled.iframe`
  margin: 50px auto;
  display: block;
  width: 500px;
  height: 250px;
`;
export const Bottombx = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
export const Likebx = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
`;
export const Likeimg = styled.img`
  height: 50px;
  cursor: pointer;
`;
export const Dislikebx = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//게시글 하단
export const List = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 30px;
`;
export const Listbtn = styled.p`
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
  &&:hover {
    filter: opacity(0.7);
  }
  &&:last-child {
    margin-right: 0;
  }
`;

//댓글 영역
export const Reviewbx = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  p {
    width: 80px;
    font-size: 30px;
  }
`;
export const Div = styled.div``;
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
export const Reviewbtn = styled.div`
  border: 2px solid #bbb;
  margin-top: -4px;
  border-top: none;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;
  p {
    color: #bdbdbd;
    letter-spacing: 1px;
  }
  button {
    border: none;
    background: #111;
    color: #fff;
    width: 120px;
    padding: 15px 0;
    border-radius: 0;
  }
`;

//수정하기
export const Modify = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 30px;
  p {
    width: 80px;
    font-size: 30px;
  }
  img {
    height: 20px;
    vertical-align: text-bottom;
  }
  input {
    margin-right: 30px;
    width: 300px;
    opacity: 1;
    color: #111;
  }
`;

// 댓글 목록
export const Users = styled.div`
  margin-top: 50px;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0;
  img {
    height: 20px;
    vertical-align: text-bottom;
  }
`;
export const Userbx = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 30px 0;
  height: 100px;
`;
export const Rebx = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: space-between;
`;
export const Reviewname = styled.p`
  font-size: 20px;
  margin: 0 0 5px 0;
  font-weight: 600;
  img {
    vertical-align: text-bottom;
  }
  .ant-rate-star:not(:last-child) {
    margin-right: 3px;
  }
`;
export const Reviewdate = styled.span`
  color: #333;
  font-size: 16px;
  font-weight: 400;
`;
export const Today = styled.span`
  color: #bdbdbd;
  font-size: 16px;
  margin-left: 65px;
`;
export const UpdateInput = styled.input`
  height: 50px;
  outline: none;
  border: 1px solid #777;
  padding: 0 15px;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.5;
`;
