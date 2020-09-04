import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchApi from "./searchApi";
export const getPlanets = createAsyncThunk("search/planets/fetch", async () => {
  const response = await searchApi.getVehicles();
  return response;
});
export const getVehicles = createAsyncThunk(
  "search/vehicles/fetch",
  async () => {
    const response = await searchApi.getPlanets();
    return response;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: { planets: null, vehicles: null },
  reducers: {},
  extraReducers: {
    [getPlanets.fulfilled]: (state, action) => {
      state.planets = action.payload.planets;
    },
    [getVehicles.fulfilled]: (state, action) => {
      state.vehicles = action.payload.vehicles;
    },
  },
});
export default searchSlice.reducer;
