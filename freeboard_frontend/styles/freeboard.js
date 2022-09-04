import styled from '@emotion/styled'

export const Box = styled.div`
  width:1200px;
  padding:30px 50px;
  margin:50px auto;
  box-shadow:0px 0px 10px #ccc;
`
export const Titlebx = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
      font-family: 'Nanum Myeongjo', serif;
    }
`
export const Title = styled.h1`
  font-size:40px;
  font-weight:bold;
  text-align:center;
  color:#e0e0e0;
  font-family: 'Libre Bodoni', serif;
  text-transform: uppercase;
  letter-spacing: 3px;
`
export const Textbx = styled.div`
  margin-top:50px;
`
export const Input = styled.input`
    height:50px;
    outline:none;
    border:1px solid transparent;
    padding:0 15px;
    border-bottom:1px solid #777;
    width:100%;
    margin-bottom:10px;
    opacity:0.5;
`
export const Contents = styled.textarea`  
    width: 100%;
    height: 450px;
    padding: 15px;
    border:1px solid #bdbdbd;
    resize:none;
    border-radius:10px;
    opacity:0.5;
`
export const Font = styled.p`
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
    color: #111;
    text-align: left;
    border-radius: 5px;
    padding: 5px 50px 5px 0;
    font-family: 'Nanum Myeongjo', serif;
`

export const Imgbx = styled.span`
    width:80px;
    height:80px;
    background:#bdbdbd;
    display:inline-block;
    margin-right:10px;
`

export const Codezip = styled.input`
    height:50px;
    outline:none;
    border:1px solid transparent;
    padding:0 15px;
    border-bottom:1px solid #ccc;
    width:300px;
    opacity:0.5;
    margin:0 30px 10px 0;
    
`
export const Search = styled.button`
    width:125px;
    height:50px;
    font-size:14px;
    color:#fff;
    font-weight:500;
    background:deepskyblue;
    border: none;
    border-radius:5px;
`
export const Setting = styled.div`
  margin-top:30px;  
  input{
    height:30px;
    vertical-align: middle;
    margin-right:5px;
  }
  span{
    font-weight:bold;
    display:inline-block;
    margin-right:20px;
  }
  input[type=radio]{
    accent-color: currentcolor;
  }
`

export const Error = styled.div`
  color:red;
  margin-left:5px;
`
export const Submit = styled.h1`
  p{
    background:deepskyblue;
    color:#fff;
    font-weight:bold;
    width:180px;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    cursor:pointer;
    font-family: 'Nanum Myeongjo', serif;
}
`
export const Routing = styled.p`
    border-radius: 5px;
    background: deepskyblue;
    color: #fff;
    width: 800px;
    height: 50px;
    font-weight: 500;
    text-align: center;
    line-height: 50px;
    margin-right: 10px;
    font-size:18px;
`