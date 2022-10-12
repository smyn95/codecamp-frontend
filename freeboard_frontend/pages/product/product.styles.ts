import styled from "@emotion/styled";

export const Box = styled.div`
  width: 1400px;
  padding: 30px 0;
  margin: 0 auto;
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
export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  position: relative;
  &.contentsBox {
    /* display: flex;
    align-items: flex-start;
    margin-top: 45px; */
    span {
      position: absolute;
      top: -25px;
    }
  }
  input {
    height: 50px;
    outline: none;
    border: 1px solid transparent;
    padding: 0 15px;
    border-bottom: 1px solid #777;
    width: 100%;
    margin-bottom: 10px;
    opacity: 0.5;
  }
`;
export const AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  position: relative;
  align-items: flex-start;
`;
export const MapBox = styled.div`
  margin-right: 30px;
  height: 100%;
  & > div {
    width: 400px;
    height: 200px;
  }
`;

export const Coordinate = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #777;
  strong {
    font-size: 16px;
    color: red;
  }
  input {
    height: 40px;
    border: none;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    margin-right: 15px;
    outline: none;
  }
`;
export const CoordinateBottom = styled.div`
  display: flex;
  flex-direction: column;
  input {
    height: 50px;
    outline: none;
    border: 1px solid transparent;
    padding: 0 15px;
    border-bottom: 1px solid #777;
    width: 100%;
    margin-bottom: 10px;
    opacity: 0.5;
  }
`;
export const Address = styled.div`
  display: flex;
  align-items: center;
  button {
    width: 15%;
    border: 1px solid #111;
    background-color: #111;
    color: #fff;
    font-size: 16px;
    margin-left: 5%;
    padding: 5px 0;
    &:hover {
      background: transparent;
      color: #111;
    }
  }
`;

export const MapAddressBox = styled.div`
  height: 250px;
  width: 100%;
`;
export const MapFlex = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputName = styled.p`
  font-size: 20px;
  font-weight: 500;
  white-space: nowrap;
  color: #111;
  text-align: left;
  border-radius: 5px;
  padding: 5px 0;
  width: 120px;
`;

export const InputError = styled.span`
  position: absolute;
  right: 0;
  color: red;
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
export const Cancel = styled.button`
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
export const SubmitBtn = styled.button`
  border-radius: 5px;
  background: rgba(0, 112, 74, 0.7);
  color: #fff;
  height: 50px;
  font-weight: 500;
  text-align: center;
  line-height: 50px;
  margin-right: 10px;
  font-size: 18px;
  width: 180px;
  &&:hover {
    background: #00704a;
  }
`;
