import {useMutation, useQuery} from '@apollo/client'
import { useRouter } from "next/router";
import PresenterPage from './ProductSell.presenter'
import { useState } from 'react'
import {CREATE_PRODUCT,} from '../../../commons/ProductSell.queryes'

export default function RegistrationPage(){
  const router = useRouter()

  const [btncolor,setBtncolor] = useState(false)
  const [seller,setSeller] = useState("")
  const [name,setName] = useState("")
  const [detail,setDetail] = useState("")
  const [price,setPrice] = useState("")

  const [createProduct] =  useMutation(CREATE_PRODUCT)


  const registration = async () => {
    try{
      const result = await createProduct({
        variables: { 
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price)
          }
        },
      })

    console.log(result)
    alert(result.data.createProduct.message)
    router.push(`/05/board/${result.data.createProduct._id}`)
  }catch (error) {
    console.log(error.message)
    alert(error.message)
    }
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value)
    if(event.target.value && name && detail && price){
        setBtncolor(true)
    }
  }
  const onChangeName = (event) => {
    setName(event.target.value)
    if(seller && event.target.value && detail && price){
      setBtncolor(true)
   }
  }
  const onChangeDetail = (event) => {
    setDetail(event.target.value)
    if(seller && name && event.target.value && price){
      setBtncolor(true)
   }
  }
  const onChangePrice = (event) => {
    setPrice(event.target.value)
    if(seller && name && detail && event.target.value){
      setBtncolor(true)
    }
  }

  console.log(btncolor)

  return(
    <>
      <PresenterPage
      registration={registration}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      btncolor={btncolor}
      />
   </>
  )

}