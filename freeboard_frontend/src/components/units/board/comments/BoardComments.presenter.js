import * as S from "../../../../../styles/fetchboard";
import { Rate } from "antd";
import "antd/dist/antd.css";
import BoardCommentsMap from "./BoardComments.map";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentsUI({
  onClickComment,
  onChangeWriter,
  onChangePassword,
  onchangeContents,
  commentData,
  onClickUpComment,
  update,
  onClickUpdate,
  commentId,
  onChangeCommentPassword,
  onChangeCommentContents,
  onChangeMyStar,
  onClickDeleteComment,
  showModal,
  handleCancel,
  isModalOpen,
  onChangeModalPassword,
  onChangeCommentRating,
  boardCommentInfinite,
}) {
  return (
    <>
      <S.Div>
        <S.Reviewbx>
          <S.Font>댓글</S.Font>
        </S.Reviewbx>

        <S.Reviewinfo>
          <S.Input type="text" placeholder="작성자" onChange={onChangeWriter} />
          <S.Input
            type="text"
            placeholder="비밀번호"
            onChange={onChangePassword}
          />
          <Rate sallowHalf defaultValue={2.5} onChange={onChangeMyStar} />
        </S.Reviewinfo>

        <div>
          <S.Content
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={onchangeContents}
          ></S.Content>
          <S.Reviewbtn>
            <p>
              <span>0</span>/100
            </p>
            <button onClick={onClickComment}>등록하기</button>
          </S.Reviewbtn>
        </div>
      </S.Div>
      <InfiniteScroll
        pageStart={0}
        loadMore={boardCommentInfinite}
        hasMore={true || false}
      >
        <div>
          {commentData?.fetchBoardComments.map((comment) => (
            <BoardCommentsMap
              onClickUpComment={onClickUpComment}
              onClickUpdate={onClickUpdate}
              update={update}
              commentId={commentId}
              onChangeCommentContents={onChangeCommentContents}
              onChangeCommentPassword={onChangeCommentPassword}
              onClickDeleteComment={onClickDeleteComment}
              showModal={showModal}
              handleCancel={handleCancel}
              isModalOpen={isModalOpen}
              onChangeModalPassword={onChangeModalPassword}
              onChangeMyStar={onChangeMyStar}
              onChangeCommentRating={onChangeCommentRating}
              key={comment._id}
              comment={comment}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
