import { ChangeEvent } from "react";
import { Address } from "react-daum-postcode";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToBoard: () => void;
  onClickUpdate: () => void;
  onClickNotice: () => void;
  handleComplete: () => void;
  onToggleModal: any;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen: boolean;
  isEdit: boolean;
  open: boolean;
}
