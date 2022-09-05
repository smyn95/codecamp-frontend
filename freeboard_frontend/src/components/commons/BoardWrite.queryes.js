import {gql} from '@apollo/client'

//Write Query
export  const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress{
        _id,
        zipcode,
        address,
        addressDetail,
        createdAt,
        updatedAt
      },
      createdAt
      updatedAt
    }
  }
`
//Detatil Query
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){ 
    fetchBoard(boardId: $boardId){ 
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress{
        _id
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`