import * as S from '../../../../../../styles/fetchboard'

export default function BoardCommentsMap({commentdata}){

  return(
    <>
      {commentdata?.fetchBoardComments.map((el,_id) => (
      <S.Users key={el._id}>
        <S.Userbx>
          <S.Leftbx>
            <S.User></S.User>
            <S.Rebx>
              <S.Reviewname>{el.writer}
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
                  <S.Icon src="/star.png" alt="별점아이콘"></S.Icon>
              </S.Reviewname>
              <S.Reviewdate>{el.contents}</S.Reviewdate>
            </S.Rebx>
        </S.Leftbx>

          <S.Right>
            <S.Icon src="/rewrite.png" alt="글쓰기아이콘"></S.Icon>
            <S.Icon src="/delete.png" alt="지우기아이콘"></S.Icon>
          </S.Right>
        </S.Userbx>
        <S.Today></S.Today>
      </S.Users>
     ))}
    </>
  )

}