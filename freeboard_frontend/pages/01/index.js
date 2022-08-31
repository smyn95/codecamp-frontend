import {useState} from 'react'
import {Box,Inputbx,Error,Submit,Setting,Textbx,Title,Adress} from '../../styles/freeboard' 

export default function Freeboard() {
  // const [input, setInput] = useState("")
  const [name, setName] = useState("")
  const [input2, setInput2] = useState("")
  const [input3, setInput3] = useState("")
  const [input4, setInput4] = useState("")
  const [input5, setInput5] = useState("")
  const [input6, setInput6] = useState("")

  // const [inputError,setInputError] = useState("")
  const [nameError,setNameError] = useState("")
  const [inputError2,setInputError2] = useState("")
  const [inputError3,setInputError3] = useState("")
  const [inputError4,setInputError4] = useState("")
  const [inputError5,setInputError5] = useState("")
  const [inputError6,setInputError6] = useState("")

  
  const onChangeName= (event) => {
    console.log(onChangeName)
    setName(event.target.value);
    if (name === "") {
      setNameError("이름을 적어주세요.");
    } else {
      setNameError("");
    }
  };


  // function onChangeInput(event){
  //   setInput(event.target.value)
  // }
  function onChangeInput2(event){
    setInput2(event.target.value)
  }
  function onChangeInput3(event){
    setInput3(event.target.value)
  }
  function onChangeInput4(event){
    setInput4(event.target.value)
  }
  function onChangeInput5(event){
    setInput5(event.target.value)
  }
  function onChangeInput6(event){
    setInput6(event.target.value)
  }

  function onClickNotice(){
    // if(input === ""){
    //   setInputError("빈칸을 입력해주세요.")

    //   } else {
    //     setInputError("")
    //   }

    if(input2 === ""){
      setInputError2("빈칸을 입력해주세요.")

      } else {
        setInputError2("")
      }
    if(input3 === ""){
      setInputError3("빈칸을 입력해주세요.")

      } else {
        setInputError3("")
      }
    if(input4 === ""){
      setInputError4("빈칸을 입력해주세요.")

      } else {
        setInputError4("")
      }
    if(input5 === ""){
      setInputError5("빈칸을 입력해주세요.")

      } else {
        setInputError5("")
      }
    if(input6 === ""){
      setInputError6("빈칸을 입력해주세요.")

      } else {
        setInputError6("")
      }
  }

  return(
    <Box>
      <Title>
        게시물 등록
      </Title>
      <Inputbx>
        <div>
         <p>작성자</p>
         <input type="text" onChange={onChangeName} placeholder="이름을 적어주세요."></input>
         <Error>{nameError}</Error>
        </div>
        <div>
         <p>비밀번호</p>
         <input type="text" onChange={onChangeInput2} placeholder="비밀번호를 입력해주세요."/>
         <Error>{inputError2}</Error>
        </div>
      </Inputbx>
      <Textbx>
       <div>
         <p>제목</p>
         <input type="text" onChange={onChangeInput3} placeholder="제목을 작성해주세요."/>
         <Error>{inputError3}</Error>
        </div>
      </Textbx>
      <Textbx>
       <div>
         <p>내용</p>
         <textarea type="text" onChange={onChangeInput4} placeholder="내용을 작성해주세요."/>
         <Error>{inputError4}</Error>
        </div>
      </Textbx>
      <Textbx>
       <div>
         <p>주소</p>
         <Adress>
            <input type="text" placeholder="00000" onChange={onChangeInput5}/>
            <button type="button" onClick="openZipSearch()">우편번호 검색</button>    
         </Adress>
        <input type="text" />
        <input type="text" />
        <Error>{inputError5}</Error> 
      </div>
      </Textbx>
      <Textbx>
       <div>
         <p>유튜브</p>
         <input type="text" onChange={onChangeInput6} placeholder="링크를 복사해주세요."/>
         <Error>{inputError6}</Error> 
        </div>
      </Textbx>
      <Textbx>
        <div>
          <p>사진 첨부</p>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Textbx>
      <Setting>
        <div>
          <p>메인 설정</p>
          <span><input type="radio"/>유튜브</span>
          <span><input type="radio"/>사진</span>
        </div>
      </Setting>
      <Submit onClick={onClickNotice}><p>등록하기</p></Submit>
    </Box>
  )
}