import {useState} from 'react'
import {Title,Box,Info,Succes,Submit,Input,Button,Error} from '../../styles/Joinpage' 

export default function JoinPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if(event.target.value !== ""){
      setEmailError("")
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }
  };
  const onChangePassword2 = (event) => {
    setPassword2(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }
  };
    const onClickSignup = () => {
      if (email.includes("@") === false) {
        setEmailError("이메일이 올바르지 않습니다. @가 없음")
        return
      }
      if (password.includes(password2) === false) {
        setPasswordError("비밀번호가 동일하지 않습니다.")
        return
      }
      if (email && password) {//email, password도 충족시켜주는 조건식
        alert("로그인이 완료되었습니다.");
     }
    };

  return(
    <Box>
      <Title>회원가입</Title>
      <hr/>

      <Info>
        <p>회원정보</p>
        <p>01</p>
      </Info>

      <Submit>
        <Input type="text" onChange={onChangeEmail} placeholder="이메일"/>
        <Error>{emailError}</Error>
        <Input type="password" onChange={onChangePassword} placeholder="비밀번호"/>
        <Error>{passwordError}</Error>
        <Input type="password" onChange={onChangePassword2} placeholder="비밀번호 확인"/>
        <Error>{passwordError}</Error>
      </Submit>
      <Button onClick={onClickSignup}>가입하기</Button>
    </Box>
      
  )
  return
}