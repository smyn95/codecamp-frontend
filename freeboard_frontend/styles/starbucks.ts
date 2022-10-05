import styled from "@emotion/styled";

export const MenuBox = styled.div`
  background: #1e3932;
`;

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
  min-height: 400px;
  position: relative;
  overflow: hidden;
  p {
    font-family: "Libre Bodoni";
    position: absolute;
    bottom: 44px;
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
    bottom: 44px;
    right: 25px;
  }
  &&::before {
    border-style: solid;
    border-width: 0 0 50px 50px;
    border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
    transition: border 0.25s;
  }
  &&::after {
    content: "More";
    bottom: 60px;
    right: 35px;
    color: #fff;
    font-size: 18px;
    opacity: 0;
  }
  &&:hover:before {
    border-width: 0 0 100px 100px;
  }
  &&:hover:after {
    opacity: 1;
    transition: opacity 0.5s;
  }
  img {
    width: 300px;
  }
  h3 {
    margin: 0;
    font-size: 14px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  li {
    padding: 5px 20px;
    background: #fff;
    border-radius: 5px;
    color: #1e3932;
    margin: 15px 15px 0 0;
    font-size: 20px;
    cursor: pointer;
    &&:hover {
      background: #111;
      color: #fff;
    }
    &&:last-child {
      margin-right: 0;
    }
  }
`;
