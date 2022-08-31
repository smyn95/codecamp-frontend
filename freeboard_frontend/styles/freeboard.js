import styled from '@emotion/styled'

export const Title = styled.h1`
  font-size:36px;
  bont-weight:bold;
  padding:30px 0 0 0;
  text-align:center;
`
export const Submit = styled.h1`
  p{
    background:#ffd600;
    color:#111;
    font-weight:bold;
    width:180px;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    cursor:pointer;
}
`
export const Box = styled.div`
  width:1200px;
  padding:30px 50px;
  margin:50px auto;
  box-shadow:0px 0px 10px #ccc;
  p{
    font-size:16px;
    font-weight:bold;
  }
  input{
    height:50px;
    outline:none;
    border:1px solid #bdbdbd;
    padding:0 15px;
    border-radius:10px
  }
`
export const Inputbx = styled.div`
  display: flex;
  justify-content: space-between; 
  input{
    width:530px;

  }
  
`
export const Textbx = styled.div`
  margin-top:50px;
  input{
    width:100%;
    margin-bottom:10px;
  }
  textarea{
    width: 100%;
    height: 450px;
    padding: 15px;
    border:1px solid #bdbdbd;
    resize:none;
  }
  span{
    width:80px;
    height:80px;
    background:#bdbdbd;
    display:inline-block;
    margin-right:10px;
  }

`
export const Adress = styled.div`
  margin-bottom:10px;
  input{
    width:80px;
    text-align:center;
    margin-right:15px;
  }
  button{
    width:125px;
    height:50px;
    font-size:14px;
    color:#fff;
    font-weight:500;
    background:#111;
    border: none;
  }
  
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