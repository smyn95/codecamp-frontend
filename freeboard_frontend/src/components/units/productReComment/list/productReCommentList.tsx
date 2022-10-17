import { message, Popconfirm } from "antd";
import * as S from "../../productComment/list/productCommentList.styles";

export default function ProductRecommentListPage(props) {
  const cancel = (e) => {
    console.log(e);
    void message.error("Click on No");
  };

  const confirm = (e) => {
    console.log(e);
    void message.success("Click on Yes");
  };
  console.log(props.el);
  return (
    <>
      {/* {data?.fetchUseditemQuestionAnswers.map((el) => ( */}
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
        <S.DateString>{props.el?.createdAt.slice(0, 10)}</S.DateString>
      </S.Recomment>
      {/* ))} */}
    </>
  );
}
