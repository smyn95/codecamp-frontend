import {useQuery,gql} from '@apollo/client'
import { useRouter } from "next/router";
import {  
  Box,
} 
from '../../../../styles/freeboard'


const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){ 
    fetchBoard(boardId: $boardId){ 
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress{
        _id
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`

export default function Fetchboard(){
  const router = useRouter()  
  const {data} = useQuery(FETCH_BOARD,{
    variables:{boardId:router.query.id} 
  })

  console.log(router.query.boardId)

  console.log(data)

  return(
    <Box>
      <div id="Board">
        <div id="Head">

          <div id="Left">
            <div></div>
            <div id="Fonts">
              <p>{data ? data.fetchBoard.writer : "로딩중입니다..."}</p>
              <p>{data ? data.fetchBoard.createdAt : "로딩중입니다..."}</p>
            </div>

            <div id="Right">
              <p id="icon"></p>
              <p id="icon"></p>
            </div>

          </div>
        </div>

        <h1>{data ? data.fetchBoard.Title : "로딩중입니다..."}</h1>
        <div id="Img">{data ? data.fetchBoard.images : "로딩중입니다..."}</div>
        <p id="Contents">{data ? data.fetchBoard.contents : "로딩중입니다..."}</p>

        <div id="U-TUBE">{data ? data.fetchBoard.youtubeUrl : "로딩중입니다..."}</div>

        <div id="LikeCount">
          <p>{data ? data.fetchBoard.likeCount : "로딩중입니다..."}</p>
          <p>{data ? data.fetchBoard.dislikeCount : "로딩중입니다..."}</p>
        </div>
    </div>

    <div>
      <p id="BoardBtn">목록으로</p>
      <p id="BoardBtn">수정하기</p>
      <p id="BoardBtn">삭제하기</p>
    </div>
  </Box>
  )
}