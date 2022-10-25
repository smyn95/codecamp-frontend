import { useMutation } from "@apollo/client";
import { message, Popconfirm } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/store";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import * as S from "../../productComment/list/productCommentList.styles";
import ProductReCommentWrite from "../write/productReCommentWirte";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "./productReCommentList.queries";

export default function ProductRecommentListPage(props) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [commentUp, setCommentUp] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const cancel = (e) => {
    void message.error("Click on No");
  };

  const onClickUpdate = () => {
    setCommentUp((prev) => !prev);
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
  return (
    <>
      {!commentUp && (
        <>
          <S.Recomment>
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
                  onConfirm={onClickDeleteRe}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <p>삭제</p>
                </Popconfirm>
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{props.el?.createdAt.slice(0, 10)}</S.DateString>
          </S.Recomment>
        </>
      )}
      {commentUp && (
        <ProductReCommentWrite
          commentUp={true}
          setCommentUp={setCommentUp}
          el={props.el}
        />
      )}
    </>
  );
}
