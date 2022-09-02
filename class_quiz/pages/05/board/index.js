import { useState } from 'react'
import {gql,useMutation, useQuery} from '@apollo/client'
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function RegistrationPage(){
  const router = useRouter()

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
  }
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeDetail = (event) => {
    setDetail(event.target.value)
  }
  const onChangePrice = (event) => {
    setPrice(event.target.value)
  }

  
return(
  <>
    판매자: <input type="text" onChange={onChangeSeller}/><br/>
    상품명: <input type="text" onChange={onChangeName}/><br/>
    상품내용: <textarea onChange={onChangeDetail}></textarea><br/>
    상품가격: <input type="number" onChange={onChangePrice}/><br/>
    <button onClick={registration}>상품등록</button>
  </>
)

}