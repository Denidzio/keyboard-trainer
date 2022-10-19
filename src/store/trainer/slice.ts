import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTrainerText } from "./thunk";

type TrainerState = {
  enteredText: string;
  randomText: {
    data: string | null;
    isFetching: boolean;
  };
  startTypingTimestamp: number | null;
};

const initialState: TrainerState = {
  enteredText: "",
  randomText: {
    data: null,
    isFetching: false,
  },
  startTypingTimestamp: null,
};

export const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    setEnteredText: (state, action: PayloadAction<string>) => {
      state.enteredText = action.payload;

      state.startTypingTimestamp =
        action.payload.length && !state.startTypingTimestamp
          ? Date.now()
          : state.startTypingTimestamp;
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
      state.randomText.data =
        "Some random text. Please, enter me. Otherwise, I will enter you.";
      state.randomText.isFetching = false;
      state.startTypingTimestamp = null;
    });
    builder.addCase(fetchTrainerText.rejected, (state) => {
      state.randomText.isFetching = false;
    });
  },
});
