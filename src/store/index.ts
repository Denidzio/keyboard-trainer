import { configureStore } from "@reduxjs/toolkit";
import { keyboardSlice } from "./keyboard/slice";
import { trainerSlice } from "./trainer/slice";

export const store = configureStore({
  reducer: {
    trainer: trainerSlice.reducer,
    keyboard: keyboardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
