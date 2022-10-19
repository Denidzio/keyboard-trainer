import { createSlice } from "@reduxjs/toolkit";

type KeyboardState = {
  isKeyboardVisible: boolean;
  isKeyboardFilled: boolean;
};

const initialState: KeyboardState = {
  isKeyboardVisible: true,
  isKeyboardFilled: false,
};

export const keyboardSlice = createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    toggleKeyboardVisibility: (state) => {
      state.isKeyboardVisible = !state.isKeyboardVisible;
    },
    toggleKeyboardFilling: (state) => {
      state.isKeyboardFilled = !state.isKeyboardFilled;
    },
  },
});
