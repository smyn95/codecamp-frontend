import * as S from "../../../../../styles/freeboard";
export default function BoardListMap({ data, onClickMoveToBoardDetail }) {
  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <S.Listfirst key={el._id}>
          <S.Listtitle>
            <li>{index + 1}</li>
            <li id={el._id} onClick={onClickMoveToBoardDetail}>
              {el.title}
            </li>
            <li>{el.writer.slice(0, 6)}</li>
            <li>{el.createdAt.slice(0, 10)}</li>
          </S.Listtitle>
        </S.Listfirst>
      ))}
    </>
  );
}
