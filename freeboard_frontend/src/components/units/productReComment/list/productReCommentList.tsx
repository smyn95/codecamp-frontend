import { useQuery } from "@apollo/client";
import { message, Popconfirm } from "antd";
import { useState } from "react";
import * as S from "../../productComment/list/productCommentList.styles";
import { FETCH_USED_ITEM_QUESTION_ANSWER } from "./productReCommentList.queries";

export default function ProductRecommentListPage() {
  // const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWER);
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
      <>
        <S.Recomment>
          <S.FlexWrapper>
            <S.Avatar src="/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer></S.Writer>
              </S.WriterWrapper>
              <S.Contents>내용</S.Contents>
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
          <S.DateString>날짜</S.DateString>
        </S.Recomment>
      </>
    </>
  );
}
