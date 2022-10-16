import InfiniteScroll from "react-infinite-scroller";
import ProductCommentListUIItem from "./ProductCommentList.item";

export default function ProductCommentListUI(props) {
  if (!props.data) return <div />;

  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <ProductCommentListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
