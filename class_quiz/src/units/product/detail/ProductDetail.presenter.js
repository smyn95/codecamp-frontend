
export default function ProductUI({data,onClickMoveToEdit}){

  return(
    <>
      <div>판매자: {data ? data.fetchProduct.seller : "로딩중입니다..."}</div>
      <div>상품명: {data ? data.fetchProduct.name : "로딩중입니다..."}</div>
      <div>상품내용: {data ? data.fetchProduct.detail : "로딩중입니다..."}</div>
      <div>상품가격: {data ? data.fetchProduct.price : "로딩중입니다..."}</div>
      <button onClick={onClickMoveToEdit}>수정하기</button>
  </>
  )

}