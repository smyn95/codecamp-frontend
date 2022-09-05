import { useRouter } from "next/router";
import {useMutation} from '@apollo/client'
import {useState} from 'react'
import { CREATE_BOARD } from '../../../commons/BoardWrite.queryes';
import BoardWriteUI from './BoardWrite.presenter';

export default function Freeboard() {
  const router = useRouter()

  const [input, setInput] = useState({
    name: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
    boardAddress:{
      boardAddress:"",
      boardAddressDetail:"",
      boardZipcode:""
    }
  });

  const [createBoard] =  useMutation(CREATE_BOARD)

  const onClickNotice = async () => { 
    try{ 
      const result = await createBoard({
        variables: {
            createBoardInput : {
            writer: input.name,
            password : input.password,
            title: input.title,
            contents: input.contents,
            youtubeUrl: input.youtubeUrl,
            boardAddress:{
              zipcode:input.boardAddress.boardZipcode,
              address:input.boardAddress.boardAddress,
              addressDetail:input.boardAddress.boardAddressDetail
            },  
            images:[]
            }
        },
      })
      console.log(result)
      // alert(result.data.createBoard.message)
      alert("게시글 등록 완료!")

      console.log(result.data.createBoard._id) //우리 보기 좋으라고 있는거
      router.push(`/board/${result.data.createBoard._id}`)
    }catch(error){
      // console.log(error.message)
      alert(error.message);
      // alert(router.query.boardId);
    }
  }
  
  const onChangeName = (event) => {
    setInput({ ...input, name: event.target.value });
  };
  const onChangePassword = (event) => {
    setInput({ ...input, password: event.target.value });
  };
  const onChangeTitle = (event) => {
    setInput({ ...input, title: event.target.value });
  };
  const onChangeContents = (event) => {
    setInput({ ...input, contents: event.target.value });
  };

  const onChangeAddress = (event) => {
    setInput({ ...input, boardAddress:{ ...input.boardAddress, boardAddress: event.target.value }});
  };

  const onChangeZipcode = (event) => {
    setInput({ ...input, boardAddress:{ ...input.boardAddress, boardZipcode: event.target.value }});
  };

  const onChangeAddressDetail = (event) => {
    setInput({ ...input, boardAddress:{ ...input.boardAddress, boardAddressDetail: event.target.value }});
  };

  const onChangeYoutubeUrl = (event) => {
    setInput({ ...input, youtubeUrl: event.target.value });
  };

  return(
    <>
      <BoardWriteUI 
        onClickNotice={onClickNotice}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onChangeAddress={onChangeAddress}
        onChangeZipcode={onChangeZipcode}
        onChangeAddressDetail={onChangeAddressDetail}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
      />
    </>
  )
}