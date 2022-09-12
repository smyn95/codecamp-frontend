import {gql} from '@apollo/client'

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