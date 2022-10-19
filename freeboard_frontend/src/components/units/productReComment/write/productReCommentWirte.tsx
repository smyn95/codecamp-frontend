import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { ErrorModal, SuccessModal } from "../../../../commons";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";

import * as S from "../../productComment/list/productCommentList.styles";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "../list/productReCommentList.queries";

export default function ProductReCommentWrite({ answersData, ...props }) {
  const router = useRouter();
  const [reComment, setReComment] = useState("");

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const onChangeReContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReComment(event.target.value);
  };

  const onClickReCommentWrite = async () => {
    if (typeof router.query.useditemId !== "string") return;

    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: reComment,
          },
          useditemQuestionId: props.el._id,
        },
        update(cache, { answersData }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [answersData?.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      SuccessModal("답글이 등록되었습니다.");
    } catch (error) {
      ErrorModal(error.message);
    }
    setReComment("");
  };

  const onClickReCommentUpdate = async () => {
    if (!reComment) {
      ErrorModal("내용이 수정되지 않았습니다.");
      return;
    }
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: reComment,
          },
          useditemQuestionAnswerId: props.el._id,
        },
      });
      SuccessModal("답글이 수정되었습니다.");
    } catch (error) {
      ErrorModal(error.message);
    }
    setReComment("");
  };
  return (
    <>
      <S.Recomment>
        <S.ContentsWrapper>
          <S.CommntContents
            maxLength={100}
            onChange={onChangeReContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={(reComment || reComment) ?? ""}
          />
          <S.BottomWrapper>
            <S.ContentsLength>
              {(reComment ? reComment.length : reComment.length) ?? 0}
              /100
            </S.ContentsLength>
            <S.Button
              onClick={
                props.isCommentState
                  ? onClickReCommentUpdate
                  : onClickReCommentWrite
              }
            >
              {props.isCommentState ? "수정하기" : "등록하기"}
            </S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Recomment>
    </>
  );
}
