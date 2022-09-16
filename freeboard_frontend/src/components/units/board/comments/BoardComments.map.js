import * as S from "../../../../../styles/fetchboard";
import { Modal, Rate } from "antd";

export default function BoardCommentsMap({
  commentData,
  onChangeWriter,
  onClickUpComment,
  update,
  onClickUpdate,
  commentId,
  onChangeCommentPassword,
  onChangeCommentContents,
  showModal,
  handleCancel,
  isModalOpen,
  onChangeModalPassword,
  onClickDeleteComment,
  onChangeMyStar,
}) {
  return (
    <>
      {commentData?.fetchBoardComments.map((comment, _id) => (
        <S.Users key={comment._id}>
          <S.Userbx>
            <S.Leftbx>
              <S.User></S.User>
              <S.Rebx>
                <S.Reviewname>
                  {comment.writer}
                  <Rate
                    sallowHalf
                    defaultValue={2.5}
                    value={comment.rating}
                    disabled
                    style={{ margin: "0 0 0 15px" }}
                  />
                </S.Reviewname>
                <S.Reviewdate maxLength={100}>{comment.contents}</S.Reviewdate>
              </S.Rebx>
            </S.Leftbx>
            <S.Right>
              <S.Icon
                id={comment._id}
                src="/rewrite.png"
                alt="글쓰기아이콘"
                onClick={onClickUpdate}
              ></S.Icon>
              <S.Icon
                id={comment._id}
                src="/delete.png"
                alt="지우기아이콘"
                type="primary"
                onClick={showModal}
              ></S.Icon>
            </S.Right>
          </S.Userbx>
          <S.Today>{comment.createdAt.slice(0, 10)}</S.Today>
          <Modal
            title="비밀번호를 입력하시면 삭제가 완료됩니다."
            open={isModalOpen}
            onOk={onClickDeleteComment}
            onCancel={handleCancel}
          >
            <input type="password" onChange={onChangeModalPassword} />
          </Modal>

          {update ? (
            commentId === comment._id ? (
              <S.Div>
                <S.Reviewinfo>
                  <S.Input
                    type="text"
                    placeholder="작성자"
                    onChange={onChangeWriter}
                    defaultValue={comment?.writer}
                    disabled
                  />
                  <S.Input
                    type="text"
                    placeholder="비밀번호"
                    onChange={onChangeCommentPassword}
                  />
                  <Rate
                    sallowHalf
                    defaultValue={2.5}
                    onChange={onChangeMyStar}
                  />
                </S.Reviewinfo>

                <div>
                  <S.Content
                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    onChange={onChangeCommentContents}
                    defaultValue={comment?.contents}
                  ></S.Content>
                  <S.Reviewbtn>
                    <p>
                      <span>0</span>/100
                    </p>
                    <button onClick={onClickUpComment}>수정하기</button>
                  </S.Reviewbtn>
                </div>
              </S.Div>
            ) : null
          ) : null}
        </S.Users>
      ))}
    </>
  );
}
