// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { triggerAsyncId } from "async_hooks";

const ReactQuill = dynamic(async () => await import("React-quill"), {
  ssr: false,
}); // 서버에서 랜더링 X

export default function WebEditorPage() {
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    //register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value);

    triggerAsyncId("contents");
  };

  const onClickSubmit = async () => {
    const { Modal } =  await import("antd");

    });
    // 에러 발생

    Modal.success({ content: "등록에 성공하였습니다." });
  };
  return (
    <>
      <div>
        작성자: <input type="text" {...register("writer")} />
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <br />
        제목: <input type="text" {...register("title")} />
        <br />
        내용: <ReactQuill theme="snow" onChange={onChangeContents} />
        <br />
      </div>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
