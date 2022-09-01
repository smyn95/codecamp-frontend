import {gql,useMutation, useQuery} from '@apollo/client'
import axios from 'axios'
import {useState} from 'react'

const CREATE_BOARD = gql `
     mutation createBoard($writer: String, $title: String, $contents:String){ 
     createProduct(writer:$writer,title:$title,contents:$contents){  
        _id
        number
        message
    }
  }
`

export default function QuizPage(){
  const [createBoard] = useMutation(CREATE_BOARD)

  const result = createBoard = () => {
    
  }
  
  return <button onClick={onClickApi}>REST-API 요청하기</button>
}