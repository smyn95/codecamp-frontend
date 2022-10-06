import { useCount } from "../../src/components/commons/hooks/useCount";

export default function QuizPage() {
  const { count, onClickCount } = useCount();

  return (
    <>
      <div>
        <p>지금의 카운트는 {count} 입니다!</p>
        <button onClick={onClickCount}>Count up!</button>
      </div>
    </>
  );
}
