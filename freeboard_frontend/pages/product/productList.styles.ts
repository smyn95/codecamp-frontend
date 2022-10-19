import styled from "@emotion/styled";

export const ListPage = styled.div`
  width: 1400px;
  padding-bottom: 30px;
  margin: 0 auto;
`;
export const Box = styled.main`
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 66px;
  }
`;

export const ProductBox = styled.section`
  width: 300px;
  height: 320px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  position: relative;
  cursor: pointer;
  border: 3px solid #2fcab0;
  background: aliceblue;

  &:hover .Layer {
    opacity: 1;
    transition: 0.5s;
  }
  &:hover .priceover {
    background: #faad14de;
    color: #fff;
    transition: background 0.5s;
    span {
      color: #fff;
    }
  }
`;
export const ProductImg = styled.div`
  height: 100%;
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
`;

export const BgLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  display: flex;
  align-items: center;
  padding: 20px 20px;

  p {
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    height: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #111;
  font-family: "Libre Bodoni", serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 30px;
  -webkit-font-smoothing: antialiased;
`;
export const Name = styled.p`
  font-family: "Libre Bodoni";
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  padding: 5px 10px;
  width: 100%;
  z-index: 0;
  font-weight: 400;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Price = styled.span`
  display: block;
  color: #aaa;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
// 검색창 부분
export const Searchbx = styled.div`
  margin-bottom: 40px;
  position: relative;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0 !important;

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
