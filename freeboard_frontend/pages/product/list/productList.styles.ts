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
  background: gray;
  position: relative;
  position: relative;
  cursor: pointer;

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
  img {
    width: 100%;
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
`;
