import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
        updatedAt
        deletedAt
      }
      # buyer {
      #   _id
      #   email
      #   name
      #   picture
      #   userPoint
      #   createdAt
      #   updatedAt
      #   deletedAt
      # }
      # seller {
      #   _id
      #   email
      #   name
      #   picture
      #   userPoint
      #   createdAt
      #   updatedAt
      #   deletedAt
      # }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      pickedCount
      soldAt
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
        updatedAt
        deletedAt
      }
      # buyer {
      #   _id
      #   email
      #   name
      #   picture
      #   userPoint
      #   createdAt
      #   updatedAt
      #   deletedAt
      # }
      # seller {
      #   _id
      #   email
      #   name
      #   picture
      #   userPoint
      #   createdAt
      #   updatedAt
      #   deletedAt
      # }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
