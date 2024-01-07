import { createSlice } from '@reduxjs/toolkit';
import { addWater } from './waterOperations.js';

const waterInitialState = {
  waterTodayRange: [],
};

const waterSlice = createSlice({
  name: 'water',
  initialState: waterInitialState,
  extraReducers: builder => {
    builder.addCase(addWater.fulfilled, (state, action) => {
      state.waterTodayRange.push(action.payload);
    });
  },
});

export const waterReducer = waterSlice.reducer;
