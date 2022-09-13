import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.Container";
import {gql,useQuery} from '@apollo/client'
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){ # 타입
    fetchBoard(number: $number){ #변수
      writer
      title
      contents
    }
  }
`



export default function GraphqlMutationPage(){
  const router = useRouter()
  const {data} = useQuery(FETCH_BOARD,{
    variables:{number: Number(router.query.number)} // 폴더 이름 정적인것이다. 실핼할때 넣어주기위해
  })

  return (
    <>
      {BoardWrite({isEdit : true,data: data})}
    </>
    // <BoardWrite isEdit={true} data={data}/>
    ) 
}