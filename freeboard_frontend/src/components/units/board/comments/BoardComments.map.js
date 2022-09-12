import * as S from '../../../../../styles/fetchboard'

export default function BoardCommentsMap({
  commentData,
  onChangeWriter,
  onChangePassword,
  onClickComment,
  onchangeContents,
  onClickUpComment,
  update,
  onClickUpdate
}){
  console.log(commentData)

  return(
    <>
    {commentData?.fetchBoardComments.map((comment, _id) => (
      <S.Users key={comment._id}>
        <S.Userbx>
          <S.Leftbx>
            <S.User></S.User>
            <S.Rebx>
              <S.Reviewname>{comment.writer}
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
              </S.Reviewname>
              <S.Reviewdate>{comment.contents}</S.Reviewdate>
            </S.Rebx>
        </S.Leftbx>
          <S.Right>
            <S.Icon src="/rewrite.png" alt="글쓰기아이콘" onClick={onClickUpdate}></S.Icon>
            <S.Icon src="/delete.png" alt="지우기아이콘"></S.Icon>
          </S.Right>
        </S.Userbx>
        <S.Today>{comment.createdAt.slice(0,10)}</S.Today>

        <S.Div>       
          <S.Reviewinfo>
            <S.Input type="text" placeholder="작성자" onChange={onChangeWriter} defaultValue={commentData?.fetchBoardComments.writer}/>
            <S.Input type="text" placeholder="비밀번호" onchange={onChangePassword} defaultValue={commentData?.fetchBoardComments.password}/>
            <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
            <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
            <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
            <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
            <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
          </S.Reviewinfo>

          <div>
            <S.Content placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." onChange={onchangeContents} defaultValue={commentData?.fetchBoardComments.contents}></S.Content>
            <S.Reviewbtn>
              <p><span>0</span>/100</p>
              <button onClick={onClickUpComment}> 수정하기</button>
            </S.Reviewbtn>
          </div>
      </S.Div>
      </S.Users>

      
      ))}
    </>
  )

}