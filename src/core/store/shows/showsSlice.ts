// @packages
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ShowsSate {
  shows: string[];
}

const initialState: ShowsSate = {
  shows: [],
};

export const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    setShows: (state: ShowsSate, action: PayloadAction<ShowsSate>) => {
      state.shows = action.payload.shows;
    },
  },
});

export default showsSlice.reducer;
