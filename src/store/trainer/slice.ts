import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTrainerText } from "./thunk";

type TrainerState = {
  enteredText: string;
  randomText: {
    data: string | null;
    isFetching: boolean;
  };
};

const initialState: TrainerState = {
  enteredText: "",
  randomText: {
    data: null,
    isFetching: false,
  },
};

export const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    setEnteredText: (state, action: PayloadAction<string>) => {
      state.enteredText = action.payload;
    },
    resetTrainerState: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrainerText.pending, (state) => {
      state.randomText.isFetching = true;
    });
    builder.addCase(fetchTrainerText.fulfilled, (state, action) => {
      state.randomText.data = action.payload;
      state.randomText.isFetching = false;
    });
    builder.addCase(fetchTrainerText.rejected, (state) => {
      state.randomText.isFetching = false;
    });
  },
});
