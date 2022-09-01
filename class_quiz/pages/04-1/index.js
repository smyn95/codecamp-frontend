import axios from 'axios'
import {useState} from 'react'

export default function Quiz04(){
  
  
  const onClickApi = async() => {
    const result = await axios.get("https://koreanjson.com/users")
    console.log(result)
  }

  return(
    <>
      <button onClick={onClickApi}>REST-API 요청하기</button>
    </>
  )
}