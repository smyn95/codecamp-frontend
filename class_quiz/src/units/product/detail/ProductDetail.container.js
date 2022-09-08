import { useRouter } from "next/router";
import {useQuery} from '@apollo/client'
import {FETCH_PRODUCT} from '../../../commons/ProductSell.queryes'
import ProductUI from './ProductDetail.presenter'

export default function StaticRoutedPage(){
  
  const router = useRouter()
  console.log("router:",router)
  
  const {data} = useQuery(FETCH_PRODUCT,{
    variables:{productId:router.query.number} 
  })

  console.log("data",data)

  const onClickMoveToEdit = () => {
    console.log(router)
    router.push(`/05/board/${router.query.number}/edit`)
    
  }

  return(
    <>
      <ProductUI data={data} onClickMoveToEdit={onClickMoveToEdit}
      />
    </>
  )
}