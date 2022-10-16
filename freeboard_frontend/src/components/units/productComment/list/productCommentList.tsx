import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../write/productcommentWrite.queries";
import ProductCommentListUI from "./productCommentList.presenter";

export default function ProductCommentList(props) {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return <ProductCommentListUI data={data} onLoadMore={onLoadMore} />;
}
