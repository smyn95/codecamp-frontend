import { useRouter } from "next/router";
import {useQuery} from '@apollo/client'
import {FETCH_PRODUCT} from '../../../commons/ProductSell.queryes'
import ProductUI from './ProductDetail.presenter'

export default function StaticRoutedPage(){
  
  const router = useRouter()
  console.log(router)
  
  const {data} = useQuery(FETCH_PRODUCT,{
    variables:{productId:router.query.number} 
  })

  console.log(data)

  return(
    <>
      <ProductUI data={data}/>
    </>
  )
}