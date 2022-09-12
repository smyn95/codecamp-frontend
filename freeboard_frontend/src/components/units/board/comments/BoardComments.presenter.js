import * as S from '../../../../../styles/fetchboard'
import BoardCommentsMap from './BoardComments.map'

export default function BoardCommentsUI({
  onClickComment,
  onChangeWriter,
  onChangePassword,
  onchangeContents,
  commentData,
  onClickUpComment,
  update,
  onClickUpdate,
}) {
    return (
      <>
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
      <BoardCommentsMap commentData={commentData} onClickUpComment={onClickUpComment} onClickUpdate={onClickUpdate}/>
      </>
    )

}