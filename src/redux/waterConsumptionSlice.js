import {
  fetchAllConsumption,
  addWatter, deleteWatter, editWater
} from './waterConsumptionOperations';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const waterConsumptionSlice = createSlice({
  name: 'items',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllConsumption.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllConsumption.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllConsumption.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addWatter.pending, state => {
        state.isLoading = true;
      })
      .addCase(addWatter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addWatter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteWatter.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWatter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteWatter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(editWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(editWater.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(editWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      });
  },
});

export const { reducer: waterConsumptionReducer } = waterConsumptionSlice;
