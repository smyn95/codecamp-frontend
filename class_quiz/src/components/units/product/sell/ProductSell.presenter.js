
import * as S from '../../../../styles/class_quiz'

export default function PresenterPage(props) {

  console.log(props.isEdit);

  return(
    <>
    <S.Wrap>
        판매자: <input type="text" onChange={props.onChangeSeller}/><br/>
        상품명: <input type="text" onChange={props.onChangeName}/><br/>
        상품내용: <textarea onChange={props.onChangeDetail}></textarea><br/>
        상품가격: <input type="number" onChange={props.onChangePrice}/><br/>
        <S.Btncolor change={props.btncolor}
         onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
         {props.isEdit ? "수정하기" : "등록하기"}</S.Btncolor>
      </S.Wrap>
    </>
  )
}
