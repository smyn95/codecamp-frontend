import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../src/commons/types/generated/types";
import * as S from "../myPage.styles";
import {
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
  FETCH_USED_ITEMS_COUNT_I_PICKED,
} from "../mypage.queries";

export default function MyPageSell() {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING, {
    fetchPolicy: "network-only",
    variables: { search: "", page: 1 },
  });

  const { data: pickData } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_COUNT_I_PICKED);
  console.log(data);
  return (
    <>
      <S.Mypage>
        <S.MypageTitle>
          <ul>
            <li>전체 {pickData?.fetchUseditemsCountIPicked}개</li>
            <li>
              <input type="checkbox" />
            </li>
            <li>상품명</li>
            <li>판매가</li>
            <li>판매날짜</li>
            <li>등록날짜</li>
            <li>상태</li>
            <li>My Point</li>
          </ul>
        </S.MypageTitle>

        {data?.fetchPointTransactionsOfSelling.map((el, index) => (
          <S.MypageSub key={index}>
            <ul>
              <li style={{ width: 70, textAlign: "center" }}>{index + 1}</li>
              <li>
                <input type="checkbox" />
              </li>
              <S.Namebx>
                <img
                  src={
                    (el.useditem?.images[0] &&
                      `https://storage.googleapis.com/${el.useditem?.images[0]}`) ||
                    ``
                  }
                />
                <S.ProductName>
                  {el.useditem?.name}
                  <span>{el.useditem?.contents}</span>
                </S.ProductName>
              </S.Namebx>
              <li>{el.useditem?.price}</li>
              <li>{el.useditem?.soldAt.slice(0, 10)}</li>
              <li>{el.useditem?.createdAt.slice(0, 10)}</li>
              <li>{el.status}</li>
              <li>{el.balance}</li>
            </ul>
          </S.MypageSub>
        ))}
      </S.Mypage>
    </>
  );
}
