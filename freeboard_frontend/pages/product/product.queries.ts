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
