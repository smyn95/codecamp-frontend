import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { ErrorModal, SuccessModal } from "../../../../commons/index";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.query";
import { Address } from "react-daum-postcode";
import BoardWriteUI from "./BoardWrite.presenter";

export default function Freeboard(props) {
  // console.log(props.data)
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(props.isEdit)
  const [input, setInput] = useState({
    name: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
    boardAddress: {
      boardAddress: "",
      boardAddressDetail: "",
      boardZipcode: "",
    },
  });

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log("fetch:", data?.fetchBoard);

  //수정하기 함수
  const onClickUpdate = async () => {
    const myvariables = {
      boardId: router.query.boardId,
      password: input.password,
      updateBoardInput: {},
    };
    try {
      if (input.title) {
        myvariables.updateBoardInput.title = input.title;
      }
      if (input.contents)
        myvariables.updateBoardInput.contents = input.contents;
      console.log(myvariables);

      // 1. 수정하기 뮤테이션 날리기
      const result = await updateBoard({
        variables: myvariables,
      });

      // 2. 상세페이지로 이동하기
      SuccessModal("게시글 수정이 완료되었습니다.");
      router.push(`/board/${result.data.updateBoard._id}`);
    } catch (error) {
      ErrorModal(error.message);
    }
  };

  //게시글 작성한 뒤 등록해주는 로직
  const onClickNotice = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: input.name,
            password: input.password,
            title: input.title,
            contents: input.contents,
            youtubeUrl: input.youtubeUrl,
            boardAddress: {
              zipcode: input.boardAddress.boardZipcode,
              address: input.boardAddress.boardAddress,
              addressDetail: input.boardAddress.boardAddressDetail,
            },
            images: [],
          },
        },
      });
      SuccessModal("게시글 등록이 완료되었습니다.");
      //우리 보기 좋으라고 있는거
      router.push(`/board/${result.data.createBoard._id}`);
    } catch (error) {
      ErrorModal(error.message);
    }
  };

  const onChangeName = (event) => {
    setInput({ ...input, name: event.target.value });
  };
  const onChangePassword = (event) => {
    setInput({ ...input, password: event.target.value });
  };
  const onChangeTitle = (event) => {
    setInput({ ...input, title: event.target.value });
  };
  const onChangeContents = (event) => {
    setInput({ ...input, contents: event.target.value });
  };

  const onChangeAddressDetail = (event) => {
    setInput({
      ...input,
      boardAddress: {
        ...input.boardAddress,
        boardAddressDetail: event.target.value,
      },
    });
  };

  const onChangeYoutubeUrl = (event) => {
    setInput({ ...input, youtubeUrl: event.target.value });
  };

  //취소하기를 누르면 목록 페이지가 나오는 로직
  const onClickMoveToBoard = () => {
    router.push("/board/");
  };
  //주소검색
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (value) => {
    onToggleModal();
    setInput({
      ...input,
      boardAddress: {
        ...input.boardAddress,
        boardZipcode: value.zonecode,
        boardAddress: value.address,
      },
    });

    console.log(value);
  };
  return (
    <>
      <BoardWriteUI
        onClickNotice={onClickNotice}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onChangeAddressDetail={onChangeAddressDetail}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        onClickMoveToBoard={onClickMoveToBoard}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
        data={props.data}
        isOpen={isOpen}
        handleComplete={handleComplete}
        onToggleModal={onToggleModal}
        input={input}
      />
    </>
  );
}
