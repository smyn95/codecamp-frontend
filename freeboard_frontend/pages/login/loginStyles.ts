import styled from "@emotion/styled";

export const LoginModal = styled.section`
  width: 350px;
  min-height: 525px;
  border-top-left-radius: 175px;
  border-top-right-radius: 175px;
  border: solid 1px #c4c4c4;
  background: #fff;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  transform: matrix(1, 0, 0, 1, -175, -262.5);
  && > div {
    padding: 65px 25px 0;
  }
`;
export const BgLayer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;
export const LoginForm = styled.form``;
export const FormInput: any = styled.div`
  display: block;
  position: relative;
  text-align: center;

  input {
    position: relative;
    width: 100%;
    height: 40px;
    border: solid #c4c4c4;
    border-width: 0 0 1px 0;
    text-align: center;
    font-size: 14px;
    color: #333;
    z-index: 1;
    background: transparent;
    outline: none;
    &:focus ~ label {
      transform: translate(0, -30px);
      font-size: 12px;
    }
    & ~ label {
      transform: ${(props) =>
        props.email || props.password ? "translate(0, -30px)" : ""};
    }
  }
  label {
    position: absolute;
    top: 35%;
    left: 0;
    width: 100%;
    font-size: 14px;
    color: #9b9b9b;
    transition: all 0.25s ease;
  }
`;

export const btnForm = styled.a`
  display: block;
  position: relative;
  margin-top: 30px;
  padding: 15px 0;
  border: 2px solid #333;
  font-size: 20px;
  color: #333;
  overflow: hidden;
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

export const BtnJoin = styled.a`
  margin-top: 100px;
  display: block;
  padding: 20px 0;
  color: #333;
  border-top: 1px solid #c4c4c4;
  &:hover {
    color: #111;
  }
`;
export const BtnX = styled.button`
  position: absolute;
  top: -60px;
  left: 50%;
  width: 45px;
  margin-left: -22px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  z-index: 10;
  img {
    width: 100%;
  }
`;
