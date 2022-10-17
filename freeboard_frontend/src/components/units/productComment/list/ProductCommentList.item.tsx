import { CommentOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { message, Popconfirm } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorModal } from "../../../../commons";
import { getDate } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import ProductRecommentListPage from "../../productReComment/list/productReCommentList";
import ProductReCommentWrite from "../../productReComment/write/productReCommentWirte";
import ProductCommentWrite from "../write/productcommentWrite";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "../write/productcommentWrite.queries";
import * as S from "./productCommentList.styles";

export default function ProductCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [isCommentWrite, setIsCommentWrite] = useState(false);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onClickComment = () => {
    setIsComment((prev) => !prev);
  };

  const onClickCommentWrite = () => {
    setIsCommentWrite((prev) => !prev);
  };

  const cancel = (e) => {
    console.log(e);
    void message.error("Click on No");
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev, { readField }) => {
                const deleteId = data?.deleteUseditemQuestion;
                const filterdPrev = prev.filter(
                  (el) => readField("_id", el) !== deleteId
                );
                return [...filterdPrev];
              },
            },
          });
        },
      });
    } catch (error) {
      ErrorModal(error.message);
    }
  };
  const onClickUpdate = () => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit && (
        <>
          <S.ItemWrapper>
            <S.FlexWrapper>
              <S.Avatar src="/avatar.png" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{props.el?.user.name}</S.Writer>
                </S.WriterWrapper>
                <S.Contents>{props.el?.contents}</S.Contents>
              </S.MainWrapper>
              <S.OptionWrapper>
                <CommentOutlined onClick={onClickComment} />
                <p onClick={onClickUpdate}>수정</p>
                <Popconfirm
                  title="정말 삭제하시겠습니까?"
                  onConfirm={onClickDelete}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <p>삭제</p>
                </Popconfirm>
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
            <S.Answer onClick={onClickCommentWrite}>
              <PlusSquareOutlined /> &nbsp;&nbsp;답글 달기
            </S.Answer>
            {isComment && <ProductRecommentListPage el={props.el} />}
            {isCommentWrite && <ProductReCommentWrite el={props.el} />}
          </S.ItemWrapper>
        </>
      )}
      {isEdit && (
        <ProductCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
