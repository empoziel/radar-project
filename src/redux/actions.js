import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helpers/constant";
import axios from "axios";

export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  //api request
  const res = await axios.request(options);

  //conver data form API to obj
  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lan: flight[3],
  }));

  return newData;
});
