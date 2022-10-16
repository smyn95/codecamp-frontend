import { EditOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Modal, Popconfirm } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorModal } from "../../../../commons";
import { getDate } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import ProductCommentWrite from "../write/productcommentWrite";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "../write/productcommentWrite.queries";
import * as S from "./productCommentList.styles";

export default function ProductCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onClickUpdate = () => {
    setIsEdit(true);
  };
  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestion: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
    } catch (error) {
      ErrorModal(error.message);
    }
  };
  return (
    <>
      {isOpenDeleteModal && (
        <Modal
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickOpenDeleteModal}
        >
          <p>정말 삭제하시겠습니까?</p>
        </Modal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <EditOutlined
                onClick={onClickUpdate}
                style={{ fontSize: "20px", marginRight: "10px" }}
              />
              <Popconfirm
                title="정말 삭제하시겠습니까?"
                onConfirm={onClickOpenDeleteModal}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <a href="#">Delete</a>
              </Popconfirm>
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}
      {isEdit && (
        <ProductCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
