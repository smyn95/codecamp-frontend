import * as S from "../../../../../styles/fetchboard";
import { Modal, Rate } from "antd";
import BoardComments from "./BoardComments.container";

export default function BoardCommentsMap({
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
  comment,
}) {
  return (
    <>
      <S.Users>
        {!update && (
          <>
            <S.Userbx>
              <S.Leftbx>
                <S.User></S.User>
                <S.Rebx>
                  <S.Reviewname>
                    {comment?.writer}
                    <Rate
                      sallowHalf
                      defaultValue={2.5}
                      value={comment?.rating}
                      disabled
                      style={{ margin: "0 0 0 15px" }}
                    />
                  </S.Reviewname>
                  <S.Reviewdate maxLength={100}>
                    {comment?.contents}
                  </S.Reviewdate>
                </S.Rebx>
              </S.Leftbx>
              <S.Right>
                <S.Icon
                  id={comment?._id}
                  src="/rewrite.png"
                  alt="글쓰기아이콘"
                  onClick={onClickUpdate}
                ></S.Icon>
                <S.Icon
                  id={comment?._id}
                  src="/delete.png"
                  alt="지우기아이콘"
                  type="primary"
                  onClick={showModal}
                ></S.Icon>
              </S.Right>
            </S.Userbx>
            <S.Today>{comment?.createdAt.slice(0, 10)}</S.Today>
          </>
        )}
        <Modal
          title="비밀번호를 입력하시면 삭제가 완료됩니다."
          open={isModalOpen}
          onOk={onClickDeleteComment}
          onCancel={handleCancel}
        >
          <input type="password" onChange={onChangeModalPassword} />
        </Modal>
        {update && <BoardComments update={true} comment={comment} />}
      </S.Users>
    </>
  );
}
