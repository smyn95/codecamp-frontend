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
//댓글
export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!,
    $boardId: ID!) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`
export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId:ID!){
    fetchBoardComments(boardId: $boardId){
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`
export const UPDATE_BOARD_COMMENTS = gql `
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!){
      updateBoardComment(
        updateBoardCommentInput: $updateBoardCommentInput
        password:$password
        boardCommentId:$boardCommentId
    )
  }
`