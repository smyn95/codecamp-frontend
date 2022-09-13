import {
  useQuery,
  gql
} 
from '@apollo/client'
import { IQuery, IQueryFetchBoardArgs } from '../../../src/commons/types/generated/types'



const FETCH_BOARD = gql`
  query fetchBoard($number: Int){ # 타입
    fetchBoard(number: $number){ #변수
      writer
      title
      contents
    }
  }
`

export default function StaticRoutedPage(){
  const {data} = useQuery<Pick<IQuery,"fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD,{
    variables:{number: 1} // 폴더 이름 정적인것이다. 실핼할때 넣어주기위해
  })

  console.log(data)

  return(
    <>
      <div>1번 게시글로 이동이 완료되었습니다.</div>
      <div>작성자: {data ? data.fetchBoard?.writer : "로딩중입니다..."}</div>
      <div>제목: {data && data.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
   </>
  )
}