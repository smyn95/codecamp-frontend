import {gql} from '@apollo/client'

export const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

//Detail Query
export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

//상품목록 노출
export const FETCH_PRODUCTS = gql`
  query fetchProducts{
    fetchProducts{
      _id
      seller
      name
      detail
      price
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($productId: ID, $updateProductInput:UpdateProductInput!) {
      updateProduct ( 
      productId: $productId, 
      updateProductInput: $updateProductInput) {
          _id
          number
          message
      }
    }
`
