import { useLazyQuery, useQuery } from "@apollo/client";
import { message, Popconfirm } from "antd";
import Router, { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import * as S from "../../productComment/list/productCommentList.styles";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./productReCommentList.queries";

export default function ProductRecommentListPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    fetchPolicy: "network-only",
  });
  const cancel = (e) => {
    console.log(e);
    void message.error("Click on No");
  };

  const confirm = (e) => {
    console.log(e);
    void message.success("Click on Yes");
  };

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <S.Recomment key={el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.name}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <p>수정</p>
              <Popconfirm
                title="정말 삭제하시겠습니까?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <p>삭제</p>
              </Popconfirm>
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{el.createdAt}</S.DateString>
        </S.Recomment>
      ))}
    </>
  );
}
