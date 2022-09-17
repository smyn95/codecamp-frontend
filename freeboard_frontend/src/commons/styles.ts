import styled from "@emotion/styled";

// HEADER
export const Logo = styled.div`
  img {
    height: 50px;
  }
`;
export const Navi = styled.div``;
export const Navibx = styled.ul`
  display: flex;
  li.all_menue:before {
    content: "|";
    position: absolute;
    display: block;
    top: 0;
    width: 1px;
    height: 20px;
    overflow: hidden;
    background: #000;
    right: -1px;
    color: rgba(0, 0, 0, 0);
  }
  li {
    font-family: "SourceHanSansKR";
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    display: block;
    padding: 0 15px;
    position: relative;
    color: #333;
    letter-spacing: 1px;
    cursor: pointer;
    will-change: color;
    transition: color 0.3s 0s linear;
  }
  li::after {
    content: "";
    display: block;
    width: calc(100% - 30px);
    height: 3px;
    background-color: #2fcab0;
    position: absolute;
    bottom: -10px;
    opacity: 0;
    left: 15px;
    will-change: opacity;
    transition: opacity 0.3s 0s linear;
  }
  li:hover:after {
    opacity: 1;
  }
`;
export const Header = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 100%;
`;
export const Inner = styled.div`
  width: 100%;
  height: 115px;
  box-shadow: 1px 1px 10px #ddd;
`;
export const TopSearch = styled.div`
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  input {
    width: 36px;
    height: 34px;
    padding: 4px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    background: #fff;
    color: #777;
    font-size: 12px;
    transition: width 0.4s;
  }
  input:focus {
    width: 190px;
    border-color: #669900;
  }

  &.focus {
    input {
      width: 190px;
    }
  }
`;
export const Material = styled.div`
  height: 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5px;
  margin: auto;
  transition: 0.3s;
  &&hover {
    cursor: pointer;
  }
  img {
    height: 25px;
    cursor: pointer;
  }
`;
//HEADER -End

//BANNER
export const Visual = styled.div`
  margin-top: 120px;
  background: url("/visual_bg.jpg") no-repeat 50% 50%;
`;
export const BannerInner = styled.div`
  height: 646px;
`;
export const BannerTitle = styled.div`
  position: absolute;
  top: 88px;
  left: -10px;
`;
export const Cup1Image = styled.img`
  position: absolute;
  bottom: 0;
  right: -47px;
`;
export const Cup1Text = styled.img`
  position: absolute;
  top: 38px;
  right: 171px;
`;
export const Cup2Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 162px;
`;
export const Cup2Text = styled.img`
  position: absolute;
  top: 321px;
  right: 416px;
`;
export const Spoon = styled.img`
  position: absolute;
  bottom: 0;
  left: 275px;
`;
export const FadeIn = styled.div`
  opacity: 0;
`;
//BANNER -End
