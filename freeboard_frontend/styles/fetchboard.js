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
  -webkit-font-smoothing: antialiased;
`;
export const DetailTitle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  color: #111;
  text-align: left;
  letter-spacing: 3px;
  margin: 30px 0 70px 0;
  padding-bottom: 15px;
  span {
    font-family: "Libre Bodoni", serif;
    color: #e0e0e0;
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
export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & .detailImg {
    width: auto;
  }
`;
export const Image = styled.img`
  width: 300px;
  margin-bottom: 30px;
`;
export const Textcontent = styled.p`
  font-size: 18px;
  height: 300px;
  border: 1px dashed #ccc;
  padding: 15px;
  word-break: break-word;
  overflow: auto;
  margin-top: 50px;
`;
export const Youtube = styled.iframe`
  margin: 50px auto;
  display: block;
  width: 300px;
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
