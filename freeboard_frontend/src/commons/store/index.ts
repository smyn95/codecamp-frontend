import { atom } from "recoil";
import { v4 } from "uuid";
import { getAccessToken } from "../libraries/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: `accessTokenState/${v4()}`,
  default: "",
});

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
});

export const isOpenState = atom({
  key: "isOpenState",
  default: false,
});

export const badgeCountState = atom({
  key: "badgeCountState",
  default: "0",
});

export const nowProductState = atom({
  key: "nowProductState",
  default: [],
});
