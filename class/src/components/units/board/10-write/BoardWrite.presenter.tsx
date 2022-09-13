import * as S from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'


  //아래는 export default와 export를 함께 사용하는 방법
  //import { BlueButton, RedInput } from "./BoardWrite.styles";


export default function  BoardWriteUI(props : IBoardWriteUIProps) {

    props.isEdit
  //자바스크립트 영역

  //HTML 영역(return 아래)
  console.log(props.mycolor)
  return(
    <>
      작성자: <S.RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/><br/>
      제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/><br/>
      내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/><br/>
      <S.BlueButton
      qqq={props.mycolor}
      aaa="150px"
      onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>

      {props.isEdit ? "수정하기" : "등록하기"}</S.BlueButton>
    </>
  )
}