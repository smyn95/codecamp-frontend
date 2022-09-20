import { useQuery, gql } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroller';

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

export default function StaticRoutedPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      <div style={{ height: '500px', overflow: 'auto' }}>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: '10px' }}>{el.writer}</span>
            <span style={{ margin: '10px' }}>{el.title}</span>
          </div>
        )) ?? <div></div>}
      </div>
    </InfiniteScroll>
  );
}
