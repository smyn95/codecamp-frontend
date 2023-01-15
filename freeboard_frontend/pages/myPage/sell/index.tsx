import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchPointTransactionsOfBuyingArgs,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../src/commons/types/generated/types";
import * as S from "../myPage.styles";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "../mypage.queries";

export default function MyPageSell() {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING, {
    fetchPolicy: "network-only",
    variables: { search: "", page: 1 },
  });

  const { data: sellData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING);

  const { data: buyData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING);

  const { data: pointData } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS, {
    fetchPolicy: "network-only",
    variables: { search: "", page: 1 },
  });

  return (
    <>
      <S.Mypage>
        <S.MypageTitle>
          <ul>
            <li>
              판매 : {sellData?.fetchPointTransactionsCountOfSelling}개<br />
              구매 : {buyData?.fetchPointTransactionsCountOfBuying}개
            </li>
            <li>상품명</li>
            <li>판매날짜</li>
            <li>등록날짜</li>
            <li>상태</li>
            <li>금액</li>
            <li>My Point</li>
          </ul>
        </S.MypageTitle>

        {pointData?.fetchPointTransactions.map((el, index) => (
          <S.MypageSub key={index}>
            <ul>
              <li style={{ width: 70, textAlign: "center" }}>{index + 1}</li>
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
              <li>{el.useditem?.soldAt.slice(0, 10)}</li>
              <li>{el.useditem?.createdAt.slice(0, 10)}</li>
              <li>{el.statusDetail}</li>
              <li>{el.useditem?.price}</li>
              <li>{el.balance}</li>
            </ul>
          </S.MypageSub>
        ))}
      </S.Mypage>
    </>
  );
}
