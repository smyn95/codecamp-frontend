import { useRecoilState } from "recoil";
import { isEditState } from "../../../../pages/example/recoil/edit";

export default function BoardWrite() {
  const [isEdit, setIsedit] = useRecoilState(isEditState);

  return (
    <>
      <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
    </>
  );
}
