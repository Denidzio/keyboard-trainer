import { createAsyncThunk } from "@reduxjs/toolkit";
import { trainerApi } from "./api";

export const fetchTrainerText = createAsyncThunk(
  "trainer/fetchTrainerText",
  async () => {
    return await trainerApi.fetchText();
  }
);
