import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "../detail/BoardDetail.Presenter";
import { ErrorModal, SuccessModal } from "../../../../commons";
import {
  FETCH_BOARD,
  DISLIKE_BOARD,
  LIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.query";

export default function Fetchboard(props) {
  const router = useRouter();
  const [likeboard] = useMutation(LIKE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [dislikeboard] = useMutation(DISLIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickMoveToBoard = () => {
    router.push("/board/");
  };
  const goEdit = () => {
    router.push(`/board/${router.query.boardId}/edit`);
  };

  const onClickLike = async () => {
    await likeboard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDisLike = async () => {
    await dislikeboard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDelete = async () => {
    await deleteBoard(
      {
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
      },
      SuccessModal("삭제가 완료되었습니다.")
    );
    router.push(`/board/`);
  };

  return (
    <>
      <BoardDetailUI
        onClickMoveToBoard={onClickMoveToBoard}
        goEdit={goEdit}
        updateData={props.data}
        data={data}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
        onClickDelete={onClickDelete}
      />
    </>
  );
  //부모에게는 return이 꼭 있어야함
}
