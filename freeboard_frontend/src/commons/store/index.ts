import { atom } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
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
