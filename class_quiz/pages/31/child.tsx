import React, { memo } from "react";

function MemoizationChildPage() {
  console.log("자식이 렌더링 됩니다!");

  return (
    <>
      <div>=========================</div>
      <h1>children</h1>
      <div>=========================</div>
    </>
  );
}

export default memo(MemoizationChildPage);
