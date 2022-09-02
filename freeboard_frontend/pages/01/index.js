import {useState} from 'react'
import {gql,useMutation} from '@apollo/client'
import {
  Box,
  Inputbx,
  Error,
  Submit,
  Setting,
  Textbx,
  Title,
  Adress
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
      createdAt
      updatedAt
      # boardAddress {
      #   _id
      # }
    }
  }
`

export default function Freeboard() {
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


  const onClickNotice = async () => {  
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
          images:[],
          }
      },
    })

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
         <input type="text" onChange={onChangePassword} placeholder="비밀번호를 입력해주세요."/>
         <Error>{passwordError}</Error>
        </div>
      </Inputbx>
      <Textbx>
       <div>
         <p>제목</p>
         <input type="text" onChange={onChangeTitle} placeholder="제목을 작성해주세요."/>
         <Error>{titleError}</Error>
        </div>
      </Textbx>
      <Textbx>
       <div>
         <p>내용</p>
         <textarea type="text" onChange={onChangeContents} placeholder="내용을 작성해주세요."/>
         <Error>{contentsError}</Error>
        </div>
      </Textbx>
      <Textbx>
       <div>
         <p>주소</p>
         <Adress>
            <input type="text" placeholder="00000" onChange={onChangeZipcode}/>
            <button type="button" onClick="openZipSearch()">우편번호 검색</button>    
         </Adress>
        <input type="text" onChange={onChangeAddress}/>
        <input type="text" onChange={onChangeAddressDetail} placeholder="상세주소를 입력해주세요."/>
      </div>
      </Textbx>
      <Textbx>
       <div>
         <p>유튜브</p>
         <input type="text" placeholder="링크를 복사해주세요." onChange={onChangeYoutubeUrl}/>
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