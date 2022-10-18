import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      useditem {
        _id
        name
        remarks
        contents
        price
        tags
        images
        soldAt
        createdAt
      }
      user {
        _id
      }
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
