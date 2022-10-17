import { useMutation, useQuery } from "@apollo/client";
import { message, Popconfirm } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import * as S from "../../productComment/list/productCommentList.styles";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./productReCommentList.queries";

export default function ProductRecommentListPage(props) {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
    fetchPolicy: "network-only",
  });

  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const cancel = (e) => {
    console.log(e);
    void message.error("Click on No");
  };

  const onClickDeleteRe = async () => {
    await deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: props.el._id,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestionAnswers: (prev, { readField }) => {
              const deleteId = data?.deleteUseditemQuestionAnswer;
              const filterPrev = prev.filter(
                (el) => readField("_id", el) !== deleteId
              );
              return [...filterPrev];
            },
          },
        });
      },
    });
  };
  console.log(data?.fetchUseditemQuestionAnswer);
  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <S.Recomment key={el}>
          <S.FlexWrapper>
            <S.Avatar src="/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el?.user.name}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <p>수정</p>
              <Popconfirm
                title="정말 삭제하시겠습니까?"
                onConfirm={onClickDeleteRe}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <p>삭제</p>
              </Popconfirm>
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{el?.createdAt.slice(0, 10)}</S.DateString>
        </S.Recomment>
      ))}
    </>
  );
}
