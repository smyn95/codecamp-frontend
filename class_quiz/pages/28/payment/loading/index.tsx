import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};
export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      useditem
      user
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function PointPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  // const [createPointTransactionOfLoading] = useMutation(
  //   CREATE_POINT_TRANSACTION_OF_LOADING
  // );
  const onClickValue = (event) => {
    setValue(event.currentTarget.value);
    console.log(value);
  };
  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp84275262");

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        name: "달고나",
        amount: Number(value),
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28/payment/loading",
      },
      (rsp: any) => {
        if (rsp.success) {
          // void createPointTransactionOfLoading({
          //   variables: { impUid },
          // });
          void router.push("/28/payment/complete/");
        } else {
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <select onClick={onClickValue}>
        <option value="">--충전할 포인트를 선택하세요--</option>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
        <option value="2000">2000원</option>
        <option value="5000">5000원</option>
      </select>
      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
}
