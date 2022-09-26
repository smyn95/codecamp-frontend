import { useQuery, useMutation } from "@apollo/client";
import BoardCommentsUI from "./BoardComments.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENTS,
} from "./BoardComments.query";
import { ErrorModal, SuccessModal } from "../../../../commons";

export default function BoardComments() {
  const router = useRouter();
  const [update, setUpdate] = useState(false);
  const [deleteComment] = useMutation(DELETE_BOARD_COMMENT);
  const [commentId, setCommentId] = useState("");
  const [MyStar, setMyStar] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(0);
  const [comment, setComment] = useState({
    password: "",
    contents: "",
    writer: "",
  });
  //수정하기 state
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [commentDelId, setCommentDelId] = useState("");

  const onChangeCommentPassword = (event) => {
    setCommentPassword(event.target.value);
  };
  const onChangeCommentContents = (event) => {
    setCommentContents(event.target.value);
  };

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENTS);
  const { data: commentData, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  const onClickComment = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: comment.writer,
            password: comment.password,
            contents: comment.contents,
            rating: MyStar,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      SuccessModal("댓글이 등록되었습니다.");
    } catch (error) {
      ErrorModal(error.message);
    }
  };
  const onClickUpComment = async (event) => {
    const commentvariables = {
      boardCommentId: commentId,
      password: commentPassword,
      rating: MyStar,
      updateBoardCommentInput: {},
    };
    try {
      if (commentContents) {
        commentvariables.updateBoardCommentInput.contents = commentContents;
      }
      if (MyStar) {
        commentvariables.updateBoardCommentInput.rating = MyStar;
      }

      await updateBoardComment({
        variables: commentvariables,
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      setUpdate(!update);
      SuccessModal("댓글 수정이 완료되었습니다.");
    } catch (error) {
      ErrorModal(error.message);
    }
  };

  function onClickUpdate() {
    setUpdate(!update);
  }

  const onChangeWriter = (event) => {
    setComment({ ...comment, writer: event.target.value });
  };
  const onChangePassword = (event) => {
    setComment({ ...comment, password: event.target.value });
  };
  const onchangeContents = (event) => {
    setComment({ ...comment, contents: event.target.value });
  };

  //별점
  function onChangeMyStar(value) {
    setMyStar(value);
  }
  const onChangeModalPassword = (event) => {
    setDeleteModal(event.target.value);
  };

  //삭제시 비밀번호 인풋 모달 출력
  const showModal = (event) => {
    setIsModalOpen(true);
    setCommentDelId(event.currentTarget.id);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //댓글 삭제
  const onClickDeleteComment = async () => {
    try {
      await deleteComment({
        variables: {
          boardCommentId: commentDelId,
          password: deleteModal,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      SuccessModal("삭제가 완료되었습니다.");
      setIsModalOpen((prev) => !prev);
      setCommentPassword("");
    } catch (error) {
      ErrorModal(error.message);
    }
  };
  //인피니트 스크롤
  const boardCommentInfinite = () => {
    if (!commentData) return;
    fetchMore({
      variables: {
        page: Math.ceil(commentData.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <>
      <BoardCommentsUI
        commentData={commentData}
        update={update}
        onClickComment={onClickComment}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onchangeContents={onchangeContents}
        onClickUpComment={onClickUpComment}
        onClickUpdate={onClickUpdate}
        commentId={commentId}
        onChangeCommentPassword={onChangeCommentPassword}
        onChangeCommentContents={onChangeCommentContents}
        onChangeMyStar={onChangeMyStar}
        onClickDeleteComment={onClickDeleteComment}
        showModal={showModal}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        onChangeModalPassword={onChangeModalPassword}
        boardCommentInfinite={boardCommentInfinite}
        // onClikeEditComment={onClikeEditComment}
      />
    </>
  );
}
