import * as S from '../../../../../styles/fetchboard'
import BoardCommentsMap from './components/BoardComments'

export default function  BoardDetailUI({
  data,
  onClickMoveToBoard,
  goEdit,
  onClickComment,
  onChangeWriter,
  onChangePassword,
  onchangeContents,
  commentData,onClickUpComment

}) {
  return(
    <S.Board>
      <S.Box>
        <div id="Head">
          <S.Left>
            <S.Leftbx>
              <S.User></S.User>
              <S.Namebx>
                <S.Name>{data ? data.fetchBoard.writer : "로딩중입니다..."}</S.Name>
                <S.Date>{data ? data.fetchBoard.createdAt : "로딩중입니다..."}</S.Date>
              </S.Namebx>
            </S.Leftbx>

            <S.Right>
              <S.Icon src="/location_on.png" alt="위치아이콘"></S.Icon>
              <S.Icon src="/link.png" alt="링크아이콘"></S.Icon>
            </S.Right>

          </S.Left>
        </div>

        <S.DetailTitle>{data ? data.fetchBoard.title : "로딩중입니다..."}</S.DetailTitle>
        <div id="Img">{data ? data.fetchBoard.images : "로딩중입니다..."}</div>
        <S.Contents src="/content.png" alt="본문 이미지"></S.Contents>
        <S.Textcontent>{data ? data.fetchBoard.contents : "로딩중입니다..."}</S.Textcontent>

        <S.Youtube>{data ? data.fetchBoard.youtubeUrl : "로딩중입니다..."}</S.Youtube>

        <S.Bottombx>
        <S.Likebx>
            <S.Likeimg src="/like.png" alt="좋아요아이콘"></S.Likeimg>
            <p>{data ? data.fetchBoard.likeCount : "로딩중입니다..."}</p>
          </S.Likebx>
          
          <S.Dislikebx>
            <S.Likeimg src="/dislike.png" alt="싫어요아이콘"></S.Likeimg>
            <p>{data ? data.fetchBoard.dislikeCount : "로딩중입니다..."}</p>
          </S.Dislikebx>
        </S.Bottombx>

    </S.Box>

    <S.List>
      <S.Listbtn onClick={onClickMoveToBoard}>목록으로</S.Listbtn>
      <S.Listbtn onClick={goEdit}>수정하기</S.Listbtn>
      <S.Listbtn>삭제하기</S.Listbtn>
    </S.List>

    {/* 댓글 */}

    <S.Div>
      <S.Reviewbx>
        <S.Font>댓글</S.Font>
      </S.Reviewbx>
    
      <S.Reviewinfo>
        <S.Input type="text" placeholder="작성자" onChange={onChangeWriter}/>
        <S.Input type="text" placeholder="비밀번호" onchange={onChangePassword}/>
        <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
        <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
        <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
        <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
        <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
      </S.Reviewinfo>

      <div>
        <S.Content placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." onChange={onchangeContents}></S.Content>
        <S.Reviewbtn>
          <p><span>0</span>/100</p>
          <button onClick={onClickComment}>등록하기</button>
        </S.Reviewbtn>
      </div>
    </S.Div>
      <BoardCommentsMap commentData={commentData} onClickUpComment={onClickUpComment}/>
  </S.Board>
  )
}