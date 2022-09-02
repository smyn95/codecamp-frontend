import {useQuery,gql} from '@apollo/client'
import { useRouter } from "next/router";


const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function StaticRoutedPage(){
  const router = useRouter()
  console.log(router)
  
  const {data} = useQuery(FETCH_PRODUCT,{
    variables:{productId:router.query.number} 
  })

  console.log(data)

  return(
    <>
      <div>{router.query.number}상품 등록이 완료되었습니다.</div>
      <div>판매자: {data ? data.fetchProduct.seller : "로딩중입니다..."}</div>
      <div>상품명: {data ? data.fetchProduct.name : "로딩중입니다..."}</div>
      <div>상품내용: {data ? data.fetchProduct.detail : "로딩중입니다..."}</div>
      <div>상품가격: {data ? data.fetchProduct.price : "로딩중입니다..."}</div>
   </>
   
  )
}