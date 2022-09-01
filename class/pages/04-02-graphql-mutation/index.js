import {gql,useMutation} from '@apollo/client'

const CREATE_BOARD = gql `
  mutation{
    createBoard(writer:"ㅇㅇ",title:"제목",contents:"내용"){
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage(){
  const [나의함수] =  useMutation(CREATE_BOARD) //useMutation 를 import 해야 쓸 수 있다. gql도 마찬가지

  const onClickSubmit = async () => {
    const result = await 나의함수()
    console.log(result)
  }

  return(
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  )

}