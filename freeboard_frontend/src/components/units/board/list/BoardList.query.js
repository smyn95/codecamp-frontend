import {gql} from '@apollo/client'

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
export const FETCH_BOARDS_OF_THE_BEST = gql`
  query {
    fetchBoardsOfTheBest{
      _id
      writer
      title
      contents
      likeCount
      createdAt
      images
    }
  }
`