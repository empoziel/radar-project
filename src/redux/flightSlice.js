import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./actions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers: (builder) => {
    //waiting answ
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      // negative answ
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.flights = action.payload;
      })
      // negative answ
      .addCase(getFlights.rejected, (state) => {
        (state.isLoading = false),
          (state.isError = "There was an error in flight data");
      });
  },
});

export default flightSlice.reducer;

/*
[getFlights.pending]: (state) => {
      state.isLoading = false;
    },
    [getFlights.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    },
    [getFlights.rejected]: (state) => {
      (state.isLoading = false),
        (state.isError = "There was an error in flight data");
    },
     */
