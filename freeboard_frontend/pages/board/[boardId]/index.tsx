import Fetchboard from "../../../src/components/units/board/detail/BoardDetail.Container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function BoardDetailPage() {
  return (
    <>
      <Fetchboard />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
