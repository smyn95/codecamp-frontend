import { useState } from "react";

export function useCount() {
  const [count, setCount] = useState(0);

  const onClickCount = (value: string) => {
    setCount((prev) => prev + 1);
  };

  return {
    count,
    onClickCount,
  };
}
