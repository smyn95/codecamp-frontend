import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../src/commons/types/generated/types";
import { FETCH_USED_ITEMS } from "./product.queries";

import * as S from "./productList.styles";

export default function ProductListPage() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onClickMoveToProductDetail = (event: MouseEvent<HTMLLIElement>) => {
    void router.push(`/product/${event.currentTarget.id}`);
  };

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <>
      <S.ListPage>
        <S.Title>Product</S.Title>
        <S.Box>
          <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
            {data?.fetchUseditems.map((el, index) => (
              <S.ProductBox
                key={el._id}
                id={el._id}
                onClick={onClickMoveToProductDetail}
              >
                <S.BgLayer className="Layer">
                  <p>{el.remarks}</p>
                </S.BgLayer>
                <img src="/dd.jpeg" alt="상품이미지" />
                <S.Name className="priceover">
                  {el.name}
                  <S.Price>{el.price}</S.Price>
                </S.Name>
              </S.ProductBox>
            ))}
          </InfiniteScroll>
        </S.Box>
      </S.ListPage>
    </>
  );
}
