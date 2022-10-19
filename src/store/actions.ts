import { keyboardSlice } from "./keyboard/slice";
import { trainerSlice } from "./trainer/slice";

export { fetchTrainerText } from "./trainer/thunk";

export const { toggleKeyboardVisibility, toggleKeyboardFilling } =
  keyboardSlice.actions;

export const { setEnteredText, resetTrainerState } = trainerSlice.actions;
