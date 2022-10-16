import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import * as S from "../../../../../pages/product/[useditemId]/productDetail.styles";
import { ErrorModal, SuccessModal } from "../../../../commons";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./productcommentWrite.queries";

export default function ProductCommentWrite(props) {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

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
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      SuccessModal("댓글이 등록되었습니다.");
    } catch (error) {
      ErrorModal(error.message);
    }

    setContents("");
  };

  return (
    <>
      <S.Product>
        {!props.isEdit && (
          <>
            <S.Font>댓글</S.Font>
          </>
        )}
        <S.InputWrapper>
          <S.Reviewinfo>
            <div>
              <S.Input placeholder="작성자" />
              <S.Input type="password" placeholder="비밀번호" />
            </div>
          </S.Reviewinfo>
        </S.InputWrapper>

        <S.ContentsWrapper>
          <S.Contents
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={onChangeContents}
          />
          <S.BottomWrapper>
            <S.ContentsLength>0/100</S.ContentsLength>
            <S.Button onClick={onClickWrite}>등록하기</S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Product>
    </>
  );
}
