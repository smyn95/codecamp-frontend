import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  const qqq = Math.random();

  console.log(qqq);

  function onClickCountUp() {
    setCount(1);
    setCount(2);
    setCount(3);
    setCount(4);
    setCount(5);
    setCount(6);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </>
  );
}
