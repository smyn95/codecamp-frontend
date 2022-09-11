import * as S from '../../../../../../styles/fetchboard'

export default function BoardCommentsMap({commentData}){
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
            <S.Icon src="/rewrite.png" alt="글쓰기아이콘"></S.Icon>
            <S.Icon src="/delete.png" alt="지우기아이콘"></S.Icon>
          </S.Right>
        </S.Userbx>
        <S.Today>{comment.createdAt}</S.Today>
      </S.Users>
      ))}
    </>
  )

}