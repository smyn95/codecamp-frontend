import styled from "@emotion/styled";

export const Box = styled.div`
  width: 1400px;
  padding: 30px 0;
  margin: 0 auto;
`;
export const Titlebx = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #111;
  font-family: "Libre Bodoni", serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  -webkit-font-smoothing: antialiased;
`;
export const Textbx = styled.div`
  margin-top: 50px;
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
  height: 450px;
  padding: 15px;
  border: 1px solid #777;
  resize: none;
  border-radius: 10px;
  opacity: 0.5;
`;
export const Font = styled.p`
  font-size: 20px;
  font-weight: 500;
  white-space: nowrap;
  color: #111;
  text-align: left;
  border-radius: 5px;
  padding: 5px 50px 5px 0;
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

export const Codezip = styled.input`
  height: 50px;
  outline: none;
  border: 1px solid transparent;
  padding: 0 15px;
  border-bottom: 1px solid #777;
  width: 300px;
  opacity: 0.5;
  margin: 0 30px 10px 0;
`;
export const Search = styled.button`
  width: 125px;
  height: 50px;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  background: #00704a;
  border: none;
  border-radius: 5px;
  &&:hover {
    filter: opacity(0.7);
  }
`;
export const Setting = styled.div`
  margin-top: 30px;
  & .radio {
    width: 100px;
  }
  input {
    display: none;
  }
  label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
  }
  label::before,
  label::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }
  label::before {
    left: 0;
    width: 10px;
    height: 10px;
    background-color: #00704a;
  }
  label::after {
    left: -5px;
    width: 20px;
    height: 20px;
    border: 2px solid #00704a;
    opacity: 0;
  }
  input:checked ~ label::after {
    opacity: 1;
    animation: scaleInOut 0.25s;
  }
  @keyframes scaleInOut {
    0% {
      transform: translateY(-50%) scale(1.5);
    }
    50% {
      transform: translateY(-50%) scale(0.5);
    }
    100% {
      transform: translateY(-50%) scale(1);
    }
  }
`;
export const Submit = styled.h1`
  display: flex;
  justify-content: center;
  p {
    background: #00704a;
    color: #fff;
    font-weight: bold;
    width: 180px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    cursor: pointer;
  }
`;
export const Routing = styled.button`
  border-radius: 5px;
  background: #00704a;
  color: #fff;
  height: 50px;
  font-weight: 500;
  text-align: center;
  line-height: 50px;
  margin-right: 10px;
  font-size: 18px;
  width: 180px;
  &&:hover {
    filter: opacity(0.7);
  }
`;

export const Replace = styled.button`
  border-radius: 5px;
  background: #ccc;
  color: #fff;
  width: 180px;
  height: 50px;
  font-weight: 500;
  text-align: center;
  line-height: 50px;
  margin-right: 10px;
  font-size: 18px;
  &&:hover {
    filter: opacity(0.7);
  }
`;
//게시글 목록
export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  width: 25%;
`;

//fetchBoards 게시글 목록 부분

export const Listall = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Listbx = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 10px #eee;
  position: relative;
  border: 1px solid #aaa;
  cursor: pointer;
  &&:hover .scale {
    scale: 1.25;
    transition: 0.3s;
  }
  &&:hover .animation {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
`;
export const Topbx = styled.div`
  width: 300px;
  height: 240px;
  overflow: hidden;
  img {
    height: 100%;
    margin: 0 auto;
    display: block;
  }
`;
export const Bottombx = styled.div`
  width: 300px;
  padding: 10px 15px;
  box-sizing: border-box;
  border-top: 1px solid #aaa;
  cursor: pointer;
  p {
    margin-bottom: 0;
  }
`;
export const BxTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const Userbx = styled.div`
  display: flex;
  padding: 10px 0 10px 0;
  box-sizing: border-box;
  align-items: center;
`;
export const User = styled.img`
  margin: 0px 10px 0 0;
  height: 35px; ;
`;
export const Listname = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
`;
export const Listdate = styled.p`
  color: #aaa;
  font-size: 15px;
  font-weight: 400;
  margin: 0;
`;
export const Listlike = styled.div`
  img {
    width: 25px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Likecount = styled.p`
  font-size: 16px;
  padding-top: 5px;
`;
export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

// 검색창 부분
export const Searchbx = styled.div`
  margin-top: 70px;
  position: relative;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .ant-picker-range {
    position: relative;
    display: inline-flex;
    width: 450px;
    height: 50px;
  }
  .ant-input-affix-wrapper {
    width: 800px;
  }
`;

export const SearchInput = styled.input`
  background: #f2f2f2;
  width: 780px;
  height: 50px;
  outline: none;
  border-radius: 10px;
  border: none;
  padding: 0 20px;
`;

export const Calender = styled.div`
  width: 300px;
  height: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;
export const Searchbtn = styled.button`
  background-color: #00704a;
  color: #fff;
  width: 100px;
  font-size: 16px;
  transition: 0.3s;
  &&:hover {
    filter: opacity(0.7);
  }
`;

//게시글 리스트
export const Boardlist = styled.div`
  border-block: 2px solid #00704a;
  margin-top: 40px;
  ul {
    margin: 0;
  }
`;

export const Listfirst = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  color: #111;
  cursor: pointer;
  &&:hover {
    background: #eaffdc8a;
    transition: 0.5s;
  }

  &&:first-child {
    border: none;
    font-size: 18px;
    font-weight: 500;
  }
  > ul {
    display: flex;
    justify-content: space-between;
    > li {
      text-align: center;
      color: #777;
      &:nth-of-type(2) {
        width: 50%;
      }
      &:nth-of-type(1) {
        width: 10%;
      }
      &:nth-of-type(3) {
        width: 10%;
      }
      &:nth-of-type(4) {
        width: 10%;
      }
    }
  }
`;
export const Listtitle = styled.ul`
  margin-bottom: 0;
  li {
    color: #111 !important;
  }
`;

//페이징 부분
export const Bottomrow = styled.div`
  display: flex;
  align-items: flex-start;
  & > div {
    display: flex;
    width: calc(100% / 3);
    justify-content: flex-end;
  }
`;
export const Paging = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 40px 0;
`;
export const Prev = styled.button`
  cursor: pointer;
  font-size: 20px;
`;
export const next = styled.button`
  cursor: pointer;
  font-size: 20px;
`;
export const Ullist = styled.ul`
  display: flex;
  font-size: 20px;
  font-weight: 300;
  margin: 0 20px;
  li {
    margin: 0 5px;
  }
`;
export const Paginglist = styled.ul`
  display: flex;
  margin: 0 auto;
  font-size: 20px;
`;

//등록하기 버튼
export const Registration = styled.button`
  display: block;
  position: relative;
  margin-top: 30px;
  padding: 10px 0;
  border: 2px solid #333;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  width: 120px;
  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: #333;
    transition: all 0.3s ease;
    transform: skewX(15deg);
  }
  &&:hover {
    color: #fff;
    ::before {
      width: 120%;
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }
`;
