import { useQuery } from "@apollo/client";
import { DatePicker, Space } from "antd";
import Search from "antd/lib/transfer/search";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../src/commons/types/generated/types";
import { FETCH_USED_ITEMS } from "./product.queries";
import _ from "lodash";

import * as S from "./productList.styles";

export default function ProductListPage() {
  const router = useRouter();

  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    fetchPolicy: "network-only",
  });
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
  // 검색창 디바운싱
  const { RangePicker } = DatePicker;

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 700);

  const onChangeSearch = (event: any) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <S.ListPage>
        <S.Title>Product</S.Title>
        <S.Box>
          <S.Searchbx>
            <Search
              placeholder="검색어를 입력하세요."
              onChange={onChangeSearch}
            />
            <Space direction="vertical" size={12}>
              <RangePicker />
            </Space>
            <S.Searchbtn>검색하기</S.Searchbtn>
          </S.Searchbx>

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
                <S.ProductImg>
                  <img
                    className="scale"
                    src={
                      (el.images[0] &&
                        `https://storage.googleapis.com/${el.images[0]}`) ||
                      ``
                    }
                  />
                </S.ProductImg>
                <S.Name className="priceover">
                  {el.name || "　 "} <S.Price>{el.price}</S.Price>
                </S.Name>
              </S.ProductBox>
            ))}
          </InfiniteScroll>
        </S.Box>
      </S.ListPage>
    </>
  );
}
