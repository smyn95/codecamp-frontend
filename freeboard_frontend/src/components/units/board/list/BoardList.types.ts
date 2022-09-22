import { MouseEvent } from "react";

export interface IBoardListProps {
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLLIElement>) => void;
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void;
}
