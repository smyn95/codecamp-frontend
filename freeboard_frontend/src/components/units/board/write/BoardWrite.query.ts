import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      boardAddress {
        _id
        zipcode
        address
        addressDetail
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      images
    }
  }
`;
export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        _id
        zipcode
        address
        addressDetail
        createdAt
      }

      createdAt
      updatedAt
    }
  }
`;
export const FETCH_BOARD = gql`
  query ($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`;
export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
