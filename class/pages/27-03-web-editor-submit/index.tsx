// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const ReactQuill = dynamic(async () => await import("React-quill"), {
  ssr: false,
}); // 서버에서 랜더링 X

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange가 됐는지 안됐는지 react-hook-form에 알려주는 기능!!
    trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });

    if (result.data?.createBoard._id !== "string") return;

    void router.push(
      `/27-04-web-editor-detail/${result.data?.createBoard._id}`
    );
    alert("등록에 성공하였습니다.");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input type="text" {...register("writer")} />
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <br />
        제목: <input type="text" {...register("title")} />
        <br />
        내용: <ReactQuill theme="snow" onChange={onChangeContents} />
        <br />
      </form>
      <button>등록하기</button>
    </>
  );
}
