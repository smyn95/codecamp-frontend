import * as RegistrationPage from './ProductSell.container'

export default function PresenterPage(props) {

  return(
    <>
      판매자: <input type="text" onChange={props.onChangeSeller}/><br/>
      상품명: <input type="text" onChange={props.onChangeName}/><br/>
      상품내용: <textarea onChange={props.onChangeDetail}></textarea><br/>
      상품가격: <input type="number" onChange={props.onChangePrice}/><br/>
      <button onClick={props.registration}>상품등록</button>
    </>
  )
}
