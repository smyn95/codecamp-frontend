import styled from '@emotion/styled'

export const Title = styled.h1`
    padding: 40px 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    text-align: center;
`
export const Box = styled.div`
    width:400px;
    margin:0 auto;
`
export const Info = styled.div`
  display:flex;
  justify-content: space-between;
  padding-top:10px;
  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    display: flex;
    align-items: center;
    margin-top:0;
}
  p:last-child{
    position: relative;
    width: 28px;
    height: 28px;
    margin-left: 16px;
    font-size: 12px;
    color: #fff;
    font-weight: 700;
    background-color: orange;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    z-index:1;
  }
`
export const Submit = styled.div`

`
export const Input = styled.input`
    width: 100%;
    height: 62px;
    padding: 22px 20px;
    border: 1px solid #DDD;
    border-radius: 6px; 
    padding:10px 0 15px 10px;

`

export const Button = styled.button`
  width: 100%;
  height: 62px;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  background-color: orange;
  border-radius: 6px;
  border:none;
  margin-top:10px
`

export const Error = styled.div`
  padding:10px 0;
  color:red;
`