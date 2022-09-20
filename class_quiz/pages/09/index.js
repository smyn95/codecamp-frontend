import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import styled from '@emotion/styled';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
export const Change = styled.span`
  color: ${(props) => (props.isTrue ? 'blue' : 'red')};
`;
export default function StaticRoutedPage(props) {
  const [startPage, setStartPage] = useState(1);
  const [isTrue, setIsTrue] = useState(true);
  const { data, refetch } = useQuery(FETCH_BOARDS);

  console.log(isTrue);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
      : 0;

  console.log(data?.fetchBoards);

  const onClickPage = (event) => {
    void refetch({ page: Number(event.currentTarget.id) });
    setIsTrue((prev) => !prev);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };
  //checked가 되면 true 안되면 false 하나의 state가 더 필요하다

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents.slice(0, 14)}</span>
        </div>
      ))}

      <span onClick={onClickPrevPage}>&lt;</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <Change
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: '10px' }}
              isTrue={false}
              checked={index + startPage === isTrue}
            >
              {index + startPage}
            </Change>
          )
      )}
      <span onClick={onClickNextPage}>&gt;</span>
    </>
  );
}
