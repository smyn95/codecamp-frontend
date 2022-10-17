import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./child";

export default function MemoizationParentPage() {
  console.log("부모가 렌더링 됩니다!");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // const aaa = useMemo(() => Math.random(), []);
  // console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1
  }, []);

  // 3. useCallback 사용시 주의사항 => state 사용 주의
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // const onClickCountState = useMemo(
  //   () => () => {
  //     console.log(countState + 1);
  //     setCountState(countState + 1);
  //   },
  //   []
  // );

  return (
    <>
      <div>=========================</div>

      <h1>parent</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button
        onClick={() => {
          // console.log(countState + 1);
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(state) +1 올리기
      </button>

      <div>=========================</div>
      <MemoizationChildPage countState={countState} />
    </>
  );
}
