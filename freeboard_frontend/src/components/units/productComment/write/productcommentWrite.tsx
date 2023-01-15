import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import * as S from "../list/productCommentList.styles";
import { ErrorModal, SuccessModal } from "../../../../commons";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./productcommentWrite.queries";

export default function ProductCommentWrite(props) {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS);

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickWrite = async () => {
    if (typeof router.query.useditemId !== "string") return;

    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query.useditemId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data?.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      SuccessModal("댓글이 등록되었습니다.");
    } catch (error) {
      ErrorModal(error.message);
    }
    setContents("");
  };

  const onClickUpdate = async () => {
    if (!contents) {
      ErrorModal("내용이 수정되지 않았습니다.");
      return;
    }

    try {
      if (typeof props.el?._id !== "string") return;
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents,
          },
          useditemQuestionId: props.el?._id,
        },
      });
      props.setIsEdit?.(false);
      SuccessModal("수정이 완료되었습니다.");
    } catch (error) {
      ErrorModal(error.message);
    }
  };

  return (
    <>
      <S.Product>
        {!props.isEdit && (
          <>
            <S.Font>댓글</S.Font>
          </>
        )}
        <br />
        <S.ContentsWrapper>
          <S.CommntContents
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={onChangeContents}
            value={contents || (props.el?.contents ?? "")}
          />
          <S.BottomWrapper>
            <S.ContentsLength>
              {(contents ? contents.length : props.el?.contents.length) ?? 0}
              /100
            </S.ContentsLength>
            <S.Button onClick={props.isEdit ? onClickUpdate : onClickWrite}>
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Product>
    </>
  );
}
