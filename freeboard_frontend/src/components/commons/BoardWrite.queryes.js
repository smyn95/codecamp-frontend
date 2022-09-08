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
export const UPDATE_BOARD = gql `
mutation updateBoard($updateBoardInput:UpdateBoardInput!,$password:String,$boardId:ID!){
  updateBoard{
      ID
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
        createdAt
        updateBoard
      }
      user
      createdAt
      updatedAt
  }
}
`
export const FETCH_BOARD = gql`
  query ($boardId: ID!){ 
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


// 게시물 목록 list
export const FETCH_BOARDS = gql`
  query {
    fetchBoards{
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
      },
      createdAt    
    }
  }
`

