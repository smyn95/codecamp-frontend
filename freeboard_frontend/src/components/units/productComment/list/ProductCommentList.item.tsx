import {
  CommentOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { message, Popconfirm } from "antd";
import { useState } from "react";
import { ErrorModal } from "../../../../commons";
import { getDate } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import ProductRecommentListPage from "../../productReComment/list/productReCommentList";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../../productReComment/list/productReCommentList.queries";
import ProductReCommentWrite from "../../productReComment/write/productReCommentWirte";
import ProductCommentWrite from "../write/productcommentWrite";
import { DELETE_USED_ITEM_QUESTION } from "../write/productcommentWrite.queries";
import * as S from "./productCommentList.styles";

export default function ProductCommentListUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [isCommentWrite, setIsCommentWrite] = useState(false);
  const [isCommentState, setIsCommentState] = useState(false);

  const { data: answersData } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
    fetchPolicy: "network-only",
  });

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
    setIsEdit((prev) => !prev);
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
                <CommentOutlined onClick={onClickComment} />
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.Answer onClick={onClickCommentWrite}>
              {!isCommentWrite ? (
                <p>
                  <PlusSquareOutlined /> &nbsp;&nbsp;답글 달기
                </p>
              ) : (
                <p>
                  <MinusSquareOutlined /> &nbsp;&nbsp;숨기기
                </p>
              )}
              <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
            </S.Answer>

            {isComment && (
              <>
                {answersData?.fetchUseditemQuestionAnswers.map((el) => (
                  <ProductRecommentListPage
                    el={el}
                    key={el}
                    answersData={answersData}
                    setIsCommentWrite={setIsCommentWrite}
                  />
                ))}
              </>
            )}

            {isCommentWrite && (
              <ProductReCommentWrite
                el={props.el}
                answersData={answersData}
                isCommentWrite={isCommentWrite}
                setIsCommentWrite={setIsCommentWrite}
              />
            )}
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
