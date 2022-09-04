import {useState} from 'react'
import {gql,useMutation} from '@apollo/client'
import { useRouter } from "next/router";
import {
  Box,
  Error,
  Submit,
  Setting,
  Textbx,
  Title,
  Input,
  Font,
  Contents,
  Imgbx,
  Codezip,
  Search,
  Titlebx,
  Routing
} 
from '../../styles/freeboard' 

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress{
        _id,
        zipcode,
        address,
        addressDetail,
        createdAt,
        updatedAt
      },
      createdAt
      updatedAt
    }
  }
`
export default function Freeboard() {
  const router = useRouter()
  
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("")

  const [boardAddress, setBoardAddress] = useState("")
  const [boardAddressDetail, setBoardAddressDetail] = useState("")
  const [boardZipcode, setBoardZipcode] = useState("")

  const [nameError, setNameError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentsError, setContentsError] = useState("")

  const [createBoard] =  useMutation(CREATE_BOARD)

  const onClickNotice = async () => { 
    try{ 
      const result = await createBoard({
        variables: {
            createBoardInput : {
            writer: name,
            password,
            title,
            contents,
            youtubeUrl,
            boardAddress: {
              zipcode: boardZipcode,
              address:boardAddress,
              addressDetail:boardAddressDetail,
            },
            images:[]
            }
        },
      })
      console.log(result)
      alert(result.data.createBoard.message)
      console.log(result.data.createBoard.number)
      router.push(`/01/board/${result.data.createBoard._id}`)
    }catch{
      if (!name) {
        setNameError("작성자를 입력해주세요.");
      }
      if (!password) {
        setPasswordError("비밀번호를 입력해주세요.");
      }
      if (!title) {
        setTitleError("제목을 입력해주세요.");
      }
      if (!contents) {
        setContentsError("내용을 입력해주세요.");
      }
      if (name && password && title && contents) {
        alert("게시글이 등록되었습니다.");
      }
      
      console.log(error.message)
      alert(error.message);
      alert(router.query.boardId);
    }
  }
  
  const onChangeName = (event) => {
    setName(event.target.value);
    if(event.target.value !== ""){
      setNameError("")
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    } 
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if(event.target.value !== ""){
      setTitleError("")
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(event.target.value !== ""){
      setContentsError("")
    }
  };

  const onChangeAddress = (event) => {
    setBoardAddress(event.target.value);
  };

  const onChangeZipcode = (event) => {
    setBoardZipcode(event.target.value);
  };

  const onChangeAddressDetail = (event) => {
    setBoardAddressDetail(event.target.value);
  };

  const onChangeYoutubeUrl = (event) => {
    setYoutubeUrl(event.target.value);
  };


  return(
    <Box>
      <Title>
        Post registration
      </Title>
      <Textbx>
        <Titlebx>
        <Font>작&nbsp;&nbsp;성&nbsp;&nbsp;자</Font>
         <Input type="text" onChange={onChangeName} placeholder="이름을 적어주세요."/>
         <Error>{nameError}</Error>
        </Titlebx>
        <Titlebx>
         <Font>비밀번호</Font>
         <Input type="text" onChange={onChangePassword} placeholder="비밀번호를 입력해주세요."/>
         <Error>{passwordError}</Error>
        </Titlebx>
      </Textbx>
      <Textbx>
       <Titlebx>
         <Font>제&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;목</Font>
         <Input type="text" onChange={onChangeTitle} placeholder="제목을 작성해주세요."/>
         <Error>{titleError}</Error>
        </Titlebx>
      </Textbx>
      <Textbx>
       <Titlebx>
         <Font>내&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;용</Font>
         <Contents type="text" onChange={onChangeContents} placeholder="내용을 작성해주세요."/>
         <Error>{contentsError}</Error>
        </Titlebx>
      </Textbx>
      
      <Textbx>
       <Titlebx>
         <Font>주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소</Font>
         <Codezip type="text" placeholder="00000" onChange={onChangeZipcode}/>
         <Search type="button" >우편번호 검색</Search>
       </Titlebx>
         <Input type="text" onChange={onChangeAddress}/>
         <Input type="text" onChange={onChangeAddressDetail} placeholder="상세주소를 입력해주세요."/>
      
      </Textbx>
      <Textbx>
       <Titlebx>
         <Font>유&nbsp;튜&nbsp;브</Font>
         <Input type="text" placeholder="링크를 복사해주세요." onChange={onChangeYoutubeUrl}/>
        </Titlebx>
      </Textbx>
      <Textbx>
        <Titlebx>
          <Font>사진첨부</Font>
          <Imgbx></Imgbx>
          <Imgbx></Imgbx>
          <Imgbx></Imgbx>
        </Titlebx>
      </Textbx>
      <Setting>
        <Titlebx>
          <Font>메인설정</Font>
          <input type="radio" checked/> <span>유튜브</span>
          <input type="radio"/> <span>사진</span>
        </Titlebx>
      </Setting>
      
      <Submit onClick={onClickNotice}>
        <Routing>등록하기</Routing>
      </Submit>
    </Box>
  )
}