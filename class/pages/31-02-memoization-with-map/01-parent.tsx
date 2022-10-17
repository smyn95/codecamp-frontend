import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationParentPage() {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");

  const onClickChange = () => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다.");
  };
  return (
    <>
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} /> // key 또는 el이 변경된 부분만 리랜더링 됨 (오늘 , 먹었습니다는 안나옴)
      ))} */}

      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} /> // key 또는 el이 변경된 부분만 리랜더링 됨 (오늘 , 먹었습니다는 안나옴)
      ))}
      {/* memo를 해도, key 자체가 변경되어 props로 넘어가므로, 모두 리랜더링 됨 */}
      {/*  필요할때가 아니면 남용하지말자 */}

      <button onClick={onClickChange}>체인지</button>
    </>
  );
}
