import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import FetchPolishExample from "../../src/components/units/21-fetchPolicy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function GlobalStatepage() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>
        버튼을 클릭하면 새로운 컴포넌트가 나타납니다.
      </button>
      {isOpen && <FetchPolishExample />}
    </div>
  );
}
