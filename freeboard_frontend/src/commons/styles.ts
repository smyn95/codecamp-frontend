import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// HEADER
export const Logo = styled.div`
  cursor: pointer;
  margin-right: 50px;
  img {
    height: 100px;
  }
`;
export const Navi = styled.div``;
export const LeftLogo = styled.div`
  display: flex;
  align-items: center;
`;

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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.8em;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    display: block;
    padding: 0 15px;
    position: relative;
    color: #111;
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
export const UserImg = styled.img`
  height: 30px;
  margin-right: 5px;
`;

export const LoginName = styled.span`
  padding: 0 5px;
  border-bottom: 2px solid #333;
  font-size: 14px;
  font-weight: 500;
`;
export const MyPage = styled.p`
  position: relative;
  padding: 0 15px 0 5px;
  cursor: pointer;
  & > svg:hover {
    color: red;
    font-weight: 500;
  }
  svg {
    cursor: pointer;
  }
`;
// user Mypage
export const MyPageTrue = styled.div`
  border: 1px solid #ccc;
  width: 250px;
  height: 230px;
  position: absolute;
  border-radius: 15px;
  background-color: #fff;
  top: 40px;
  right: 0;
  z-index: 99;
  & > div {
    display: flex;
    align-items: center;
    padding: 15px 25px;
    border-bottom: 2px solid #000;
    img {
      height: 40px;
    }
  }
`;
export const Logout = styled.ul`
  height: 149px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  li {
    border-bottom: 1px solid #efefef;
    padding: 0 25px 0 30px;
    height: 50%;
    display: flex;
    align-items: center;
    overflow: hidden;
    svg {
      font-size: 20px;
      margin-right: 15px;
    }
    &:hover {
      background: #e6f7ff;
    }
  }
  li:last-child {
    border-bottom: none;
    border-radius: 0 0 15px 15px;
  }
`;

export const UserPage = styled.div`
  font-weight: 600;
  margin-left: 10px;
  p {
    font-size: 16px;
  }
`;

// user Mypage End
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

export const Login = styled.img`
  cursor: pointer;
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
export const CartList = styled.div`
  position: relative;
`;
export const pickNum = styled.span`
  position: absolute;
  top: 3px;
  right: -4px;
  padding: 3px 7px;
  background: #faad14de;
  border-radius: 50%;
  font-weight: 700;
  color: #fff;
  font-size: 12px;
`;
// HEADER -End

// BANNER
export const Visual = styled.div`
  background: url("/main_bg.jpeg") no-repeat 50% 50%;
  background-size: cover;
`;

const opacity = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
    
  }
`;

export const BannerInner = styled.div`
  position: relative;
  width: 1100px;
  margin: 0 auto;
  height: 646px;

  & div img {
    opacity: 0;
    transition: all 3s ease;
    animation-fill-mode: forwards;
    animation-duration: 2s;
  }

  div:nth-of-type(1) img {
    animation-name: ${opacity};
    animation-delay: 0.4s;
  }
  div:nth-of-type(2) img {
    animation-name: ${opacity};
    animation-delay: 1.4s;
  }
  div:nth-of-type(3) img {
    animation-name: ${opacity};
    animation-delay: 1.8s;
  }
  div:nth-of-type(4) img {
    animation-name: ${opacity};
    animation-delay: 0.8s;
  }
`;

export const BannerTitle = styled.div`
  position: absolute;
  width: 332px;
  left: -10.8%;
  top: 30%;
`;
export const Set02 = styled.img`
  position: absolute;
  z-index: 9;
  top: 10.9%;
  left: 26.4%;
  width: 24.1%;
`;

export const Set03 = styled.img`
  position: absolute;
  z-index: 10;
  top: 7.8%;
  right: 5.8%;
  width: 24.2%;
  max-width: 305px;
`;
export const Set01 = styled.img`
  position: absolute;
  z-index: 8;
  top: 26.5%;
  left: 48.2%;
  width: 24.4%;
  max-width: 294px;
`;

//BANNER -End

//Badge
export const Badges = styled.div`
  position: fixed;
  right: 12px;
  top: 200px;
  display: block;
  z-index: 9999;
`;
export const Badge = styled.div`
  border-radius: 10px;
  overflow: hidden;
  display: block;
  margin-bottom: 12px;
  box-shadow: 4px 4px 10px, rgb(0 0 0 / 15%);
  cursor: pointer;
  button {
    width: 140px;
    height: 50px;
    background: #2fcab0;
    color: #fff;
    font-size: 18px;
    line-height: 50px;
    svg {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
//Badge End

export const SubBaaner = styled.div`
  background: url(/subbanner.png) no-repeat 50% 85%;
  background-size: cover;
  height: 300px;
`;
export const SubBaaner02 = styled.div`
  background: url(/subbanner02.png) no-repeat 50% 85%;
  background-size: cover;
  height: 300px;
`;
//
//
//
//
//
//
//
//

// 랜딩페이지
export const Square = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  &:hover span {
    border: none;
    background: rgba(0, 0, 255, 0.8);
  }
`;
export const Animantion = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  transition: 0.5s;
  border-radius: 38% 62% 63% 37% /41% 44% 56% 59%;
  &:nth-child(1) {
    animation: rotation1 6s linear infinite;
    @keyframes rotation1 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  &:nth-child(2) {
    animation: rotation2 10s linear infinite;
    @keyframes rotation2 {
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @keyframes rotation3 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  &:nth-child(3) {
    animation: rotation3 8s linear infinite;
  }
`;
export const ContentRanding = styled.div`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: 0.5s;
  p {
    padding: 20px 0;
  }
  a {
    display: inline-block;
    padding: 6px 18px;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 73% 27% 44% 56% / 49% 44% 56% 51%;
    transition: 0.5s;
  }
  a:hover {
    background: #fff;
    color: #0000ff;
  }
`;
//
//
//
//
//
//
//
//
// 랜딩페이지
// export const Randing = styled.div`
//   img {
//     display: block;
//     margin: auto;
//   }
// `;
// const flip = keyframes`
//   35%{
//     transform: rotateX(360deg);
//   }
//   100%{
//     transform: rotateX(360deg);

//   }
// `;

// export const Container = styled.div`
//   display: flex;
//   position: absolute;
//   left: 52%;
//   transform: translate(-50%, -50%);
//   span {
//     font-size: 5vw;
//     letter-spacing: 10px;
//     animation: flip 2.6s infinite linear;
//     transform-origin: 0 70%;
//     transform-style: preserve-3d;
//   }
//   span:nth-child(even) {
//     color: #64a70b;
//   }
//   span:nth-child(2) {
//     animation-delay: 0.3s;
//     animation-name: ${flip};
//   }
//   span:nth-child(3) {
//     animation-delay: 0.6s;
//     animation-name: ${flip};
//   }
//   span:nth-child(4) {
//     animation-delay: 0.9s;
//     animation-name: ${flip};
//   }
//   span:nth-child(5) {
//     animation-delay: 1.2s;
//     animation-name: ${flip};
//   }
//   span:nth-child(6) {
//     animation-delay: 1.5s;
//     animation-name: ${flip};
//   }
//   span:nth-child(7) {
//     animation-delay: 1.8s;
//     animation-name: ${flip};
//   }
// `;
