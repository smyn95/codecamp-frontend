import { useForm } from "react-hook-form";

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      <button>등록하기</button>
    </form>
  );
}

// <button type="button">나만의버튼</button>
// <button type="submit">보내기</button> //기본값
// <button type="reset">지우지</button>
