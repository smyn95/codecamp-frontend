import { useLazyQuery, useQuery } from "@apollo/client";
import { message, Popconfirm } from "antd";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import * as S from "../../productComment/list/productCommentList.styles";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./productReCommentList.queries";

export default function ProductRecommentListPage() {
  const { data } = useLazyQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS);
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
      <S.Recomment>
        <S.FlexWrapper>
          <S.Avatar src="/avatar.png" />
          <S.MainWrapper>
            <S.WriterWrapper>
              <S.Writer>
                {data?.fetchUseditemQuestionAnswers.user.name}
              </S.Writer>
            </S.WriterWrapper>
            <S.Contents>
              {data?.fetchUseditemQuestionAnswers.contents}
            </S.Contents>
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
        <S.DateString>
          {data?.fetchUseditemQuestionAnswers.createdAt(slice(0, 8))}
        </S.DateString>
      </S.Recomment>
    </>
  );
}
