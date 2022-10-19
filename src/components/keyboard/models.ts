import { KeyCode } from "store/keyboard/models";

export type KeyConfig = {
  mainTitle: string;
  subTitle?: string;
  code: KeyCode;
};
