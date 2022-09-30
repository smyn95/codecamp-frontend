import { atom } from "recoil";
import BoardWrite from "../../../../src/components/units/example/write";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export default function QuizEdit() {
  return (
    <div>
      <BoardWrite />
    </div>
  );
}
