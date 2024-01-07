import { createSlice } from '@reduxjs/toolkit';
import { addWaterRecord, editWaterRecord, deletetWaterRecord, getTodayWater } from './waterOperations.js'

const initialState = {
    isLoading: false,
    error: null,
    waterTodayRecords: [],
    waterMonthRecords: [],
};

const waterSlice = createSlice({
    name: 'water',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(addWaterRecord.pending, state => {
                state.isLoading = true;
            })
            .addCase(addWaterRecord.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(addWaterRecord.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.waterTodayRecords.push(action.payload);
            })
            .addCase(editWaterRecord.pending, state => {
                state.isLoading = true;
            })
            .addCase(editWaterRecord.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(editWaterRecord.fulfilled, (state, action) => {
                const idx = state.waterTodayRecords.findIndex(
                    water => water.id === action.payload.id
                );
                state.waterTodayRecords[idx] = { ...state.waterTodayRecords[idx], ...action.payload }
            })
            .addCase(deletetWaterRecord.pending, state => {
                state.isLoading = true;
            })
            .addCase(deletetWaterRecord.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(deletetWaterRecord.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(getTodayWater.pending, state => {
                state.isLoading = true;
            })
            .addCase(getTodayWater.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getTodayWater.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.waterTodayRecords = action.payload;
            })
    },
});

export const waterReducer = waterSlice.reducer;
