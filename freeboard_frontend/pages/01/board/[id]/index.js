import {useQuery,gql} from '@apollo/client'
import { useRouter } from "next/router";
import {  
  Box,
  Name,
  Date,
  User,
  Left,
  Namebx,
  Icon,
  Leftbx,
  Title,
  Contents,
  Textcontent,
  Youtube,
  Likebx,
  Bottombx,
  Dislikebx,
  Board,
  List,
  Listbtn,
  Right,
  Reviewbx,
  Font,
  Input,
  Reviewinfo,
  Content,
  Reviewbtn,
  Likeimg,
  Modify,
  Users,
  Reviewname,
  Reviewdate,
  Rebx,
  Userbx,
  Today
} 
from '../../../../styles/fetchboard'

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
    <Board>
      <Box>
        <div id="Head">
          <Left>
            <Leftbx>
              <User></User>
              <Namebx>
                <Name>{data ? data.fetchBoard.writer : "로딩중입니다..."}</Name>
                <Date>{data ? data.fetchBoard.createdAt : "로딩중입니다..."}</Date>
              </Namebx>
            </Leftbx>

            <Right>
              <Icon src="/location_on.png" alt="위치아이콘"></Icon>
              <Icon src="/link.png" alt="링크아이콘"></Icon>
            </Right>

          </Left>
        </div>

        <Title>{data ? data.fetchBoard.title : "로딩중입니다..."}</Title>
        {/* <div id="Img">{data ? data.fetchBoard.images : "로딩중입니다..."}</div> */}
        <Contents src="/content.png" alt="본문 이미지"></Contents>
        <Textcontent>{data ? data.fetchBoard.contents : "로딩중입니다..."}</Textcontent>

        <Youtube>{data ? data.fetchBoard.youtubeUrl : "로딩중입니다..."}</Youtube>

        <Bottombx>
         <Likebx>
            <Likeimg src="/like.png" alt="좋아요아이콘"></Likeimg>
            <p>{data ? data.fetchBoard.likeCount : "로딩중입니다..."}</p>
          </Likebx>
          
          <Dislikebx>
            <Likeimg src="/dislike.png" alt="싫어요아이콘"></Likeimg>
            <p>{data ? data.fetchBoard.dislikeCount : "로딩중입니다..."}</p>
          </Dislikebx>
        </Bottombx>

    </Box>

    <List>
      <Listbtn>목록으로</Listbtn>
      <Listbtn>수정하기</Listbtn>
      <Listbtn>삭제하기</Listbtn>
    </List>

    {/* 댓글 */}
    <Reviewbx>
      <Font>댓글</Font>
    </Reviewbx>

    <Reviewinfo>
      <Input type="text" placeholder="작성자"/>
      <Input type="text" placeholder="비밀번호"/>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
    </Reviewinfo>

    <div>
      <Content placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></Content>
      <Reviewbtn>
        <p><span>0</span>/100</p>
        <button>등록하기</button>
      </Reviewbtn>
    </div>

    <Modify>
      <Input type="text" placeholder="작성자"/>
      <Input type="text" placeholder="비밀번호"/>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
      <Icon src="/star.png" alt="별점아이콘"></Icon>
    </Modify>

    <div>
      <Content placeholder="수정할 내용을 입력하세요."></Content>
      <Reviewbtn>
        <p><span>0</span>/100</p>
        <button>수정하기</button>
      </Reviewbtn>
    </div>

    <Users>
      <Userbx>
        <Leftbx>
          <User></User>
          <Rebx>
            <Reviewname>신미연&nbsp;&nbsp;&nbsp;&nbsp;
                <Icon src="/star.png" alt="별점아이콘"></Icon>
                <Icon src="/star.png" alt="별점아이콘"></Icon>
                <Icon src="/star.png" alt="별점아이콘"></Icon>
                <Icon src="/star.png" alt="별점아이콘"></Icon>
                <Icon src="/star.png" alt="별점아이콘"></Icon>
            </Reviewname>
            <Reviewdate>만드는데 한나절</Reviewdate>
          </Rebx>

        </Leftbx>

        <Right>
          <Icon src="/rewrite.png" alt="글쓰기아이콘"></Icon>
          <Icon src="/delete.png" alt="지우기아이콘"></Icon>
        </Right>
      </Userbx>
      <Today>{data ? data.fetchBoard.createdAt : "로딩중입니다..."}</Today>
    </Users>
    
  </Board>
  )
}