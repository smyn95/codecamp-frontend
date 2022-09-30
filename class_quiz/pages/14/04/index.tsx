import { useState } from "react";

export default function Quiz03() {
  const [state, setState] = useState(0);

  const onClickQwer = () => {
    setState((qwer) => qwer + 1);
    console.log(state);
  };

  return (
    <>
      <button onClick={onClickQwer}>아 ㅈ베ㅏㅂ절</button>
    </>
  );
}
