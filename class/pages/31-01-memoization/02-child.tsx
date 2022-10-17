import React, { memo } from "react";

function MemoizationChildPage(props) {
  console.log("자식이 렌더링 됩니다.");

  return (
    <>
      <div> ==================================== </div>
      <h1>자식 컴포넌트</h1>
      <div> ==================================== </div>
    </>
  );
}

// export default MemoizationChildPage;
export default memo(MemoizationChildPage); // react에서 제공해주는 HOC ,기록됨
