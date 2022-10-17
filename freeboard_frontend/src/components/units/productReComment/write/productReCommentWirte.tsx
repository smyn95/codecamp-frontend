import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { ErrorModal, SuccessModal } from "../../../../commons";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import * as S from "../../productComment/list/productCommentList.styles";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "../list/productReCommentList.queries";

export default function ProductReCommentWrite(props) {
  const router = useRouter();
  const [reComment, setReComment] = useState("");

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: router.query.useditemQuestionId },
    fetchPolicy: "network-only",
  });

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const onChangeReContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReComment(event.target.value);
  };

  const onClickReCommentWrite = async () => {
    // console.log(router.query.useditemId);
    if (typeof router.query.useditemId !== "string") return;

    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: reComment,
          },
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el._id },
          },
        ],
      });
      SuccessModal("답글이 등록되었습니다.");
    } catch (error) {
      ErrorModal(error.message);
    }
    setReComment("");
  };
  console.log("recomment쓰는거", data);
  return (
    <>
      <S.Recomment>
        <S.ContentsWrapper>
          <S.CommntContents
            maxLength={100}
            onChange={onChangeReContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.BottomWrapper>
            <S.ContentsLength>0/100</S.ContentsLength>
            <S.Button onClick={onClickReCommentWrite}>등록하기</S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Recomment>
    </>
  );
}
