import styled from '@emotion/styled'

export const Wrap = styled.div`
  padding:0 50px;
`
export const Box = styled.div`
  width: 640px;
  border:5px solid #adadad;
`
export const Img = styled.img`
  padding:43px 0;
  display:block;
  width:19px;
  margin-left: 520px;
`
export const Myinfo = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size:40px;
`

export const Info = styled.div`
  display:flex;
  align-items: center;
`
export const Face = styled.img`
  width:60px;
  height:60px;
`
export const Name = styled.p`
  font-size:24px;
  font-weight:700;
  padding:0 15px;
`
export const Arrow = styled.img`
  width:12px;
  height:12px;
`

export const Tab = styled.div`
  display:flex;
  font-size:30px;
  color:#cacaca;
  font-weight:700;
  justify-content: space-between;
  align-items: center;
  padding-bottom:20px;
  p:hover{
    color:#ff1b6d;
    text-decoration: underline;
  }
`

export const Quiz = styled.div`
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -15px;
  }
  span{
    color:#adadad;
    font-size:18px;
  }
  p{
    font-size:24px;
  }
  img{
    height:18px;
  }
`
export const Menu = styled.div`
  height:100px;
  display:flex;
  justify-content: space-between;
  p{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  img{
    height:40px;
  }
  p:last-child{
    color:#ff1b6d;
  }
`


//day02
export const Greeting = styled.button`
  padding:50px;
  background:dodgerblue;
  color:#fff;
  display:block;
  margin:100px auto;
  border:none;
  box-shadow: 5px 5px 10px #ccc;
  border-radius:10px;
  font-size:30px;
  cursor:pointer;
  font-weight:bold;
  &:hover{
    background:#fff;
    color:dodgerblue;
  }
`