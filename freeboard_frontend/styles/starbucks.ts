import styled from "@emotion/styled";

export const MenuBox = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  width: 1400px;
  margin: 0 auto;
`;
export const ListOver = styled.li`
  width: calc(100% / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 355px;
  position: relative;
  overflow: hidden;
  p {
    font-family: "Libre Bodoni";
    position: absolute;
    bottom: 21px;
    left: 25px;
    background: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-radius: 0 5px 0 0;
  }
  &&::before,
  &&:after {
    content: "";
    position: absolute;
    top: 21px;
    right: 25px;
  }
  &&::before {
    border-style: solid;
    border-width: 0 0 50px 50px;
    border-color: transparent transparent rgba(30, 57, 50, 0.8) transparent;
    transition: border 0.25s;
    transform: rotate(-90deg);
  }
  &&::after {
    content: "More";
    top: 36px;
    right: 35px;
    color: #fff;
    font-size: 18px;
    opacity: 0;
  }
  &&:hover:before {
    border-width: 213px 200px 100px 100px;
    border-color: rgba(30, 57, 50, 0.8);
    transform: rotate(0deg);
    border-radius: 10px 0 10px 0px;
  }
  &&:hover:after {
    opacity: 1;
    transition: opacity 0.5s;
  }
  img {
    width: 300px;
    border-radius: 15px 0 15px 0;
  }
  h3 {
    margin: 0;
    font-size: 14px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  margin: 50px 0 40px 0;
  li {
    padding: 5px 60px;
    background: tomato;
    border-radius: 5px;
    border: 1px solid tomato;
    color: #fff;
    margin: 15px 15px 0 0;
    font-size: 20px;
    cursor: pointer;
    font-weight: 600;
    line-height: 28px;
    &:last-of-type {
      margin-right: 0;
    }
    &:hover {
      background: transparent;
      border: 1px solid tomato;
      color: tomato;
    }
  }
`;
