import styled from "@emotion/styled";

export const Join = styled.div`
  position: relative;
`;
export const Title = styled.h1`
  margin: 50px 0 60px;
  font-size: 50px;
  color: #e0e0e0;
  font-family: "Libre Bodoni", serif;
  text-align: center;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
`;
export const JoinForm = styled.form`
  width: 300px;
  margin: 0 auto;
`;
export const FormInput = styled.span`
  display: block;
  position: relative;
  text-align: center;
  margin-top: 50px;
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
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
  }
  input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-30px);
  }
`;
export const FormLabel = styled.label`
  position: absolute;
  top: 35%;
  left: 0;
  width: 100%;
  font-size: 14px;
  color: #9b9b9b;
  transition: all 0.25s ease;
`;
export const FormFile = styled.span`
  display: block;
  position: relative;
  margin-top: 45px;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
  }
`;
export const ProfileUp = styled.a`
  display: block;
  position: relative;
  margin-top: 30px;
  padding: 15px 0;
  border: 1px solid #c4c4c4;
  font-size: 20px;
  color: #333;
  overflow: hidden;
  cursor: pointer;
  transition: color 0.3s ease;

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
    ::before {
      width: 120%;
      z-index: -1;
    }
    span {
      color: #fff;
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    font-size: 14px;
    color: #333;
    text-align: center;
    z-index: 10;
  }
`;
export const Info = styled.span`
  font-size: 12px;
  color: #9b9b9b;
  text-align: center;
  margin: 15px auto;
  display: block;
`;
export const PreviewImg = styled.div`
  margin-top: 50px;
  text-align: center;
  img {
    position: relative;
    width: 70px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    span {
      display: block;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
    }
  }
  p {
    margin-top: 10px;
    font-size: 12px;
    color: #9b9b9b;
    line-height: 130%;
  }
`;

export const BtnMorebx = styled.div`
  margin-top: 50px;
  padding: 0;
  border: 0;
  text-align: center;
`;
export const BtnMore = styled.button`
  display: inline-block;
  position: relative;
  padding: 15px 20px 10px;
  border-bottom: 6px solid #004438;
  color: #004438;
  text-align: center;
  border-radius: 0;
  &&:hover {
    color: #fff;
  }
  &&:hover:before {
    height: 100%;
  }
  &&:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: #004438;
    transition: height 0.2s ease;
  }
  span {
    display: inline-block;
    position: relative;
    z-index: 1;
    letter-spacing: 10px;
    font-size: 20px;
    font-family: "Libre Bodoni", serif;
    text-indent: 0.9rem;
    transition: color 0.2s ease;
    font-weight: 300;
  }
`;
export const MyInfo = styled.p`
  margin-top: 40px;
  font-size: 12px;
  color: #9b9b9b;
  text-align: center;
`;
export const BtnCancel = styled.a`
  display: block;
  margin-top: 40px;
  font-size: 12px;
  color: #9b9b9b;
  text-align: center;
  border: 1px solid #9b9b9b;
  padding: 10px 0;
  margin: 40px auto;
  width: 150px;
  &:hover {
    color: #9b9b9b;
  }
`;
