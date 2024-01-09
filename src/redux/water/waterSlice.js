import { createSlice } from '@reduxjs/toolkit';
import { addWaterRecord, editWaterRecord, deletetWaterRecord, getTodayWater, getMonthWater } from './waterOperations.js'

const initialState = {
    isLoading: false,
    error: null,
    percentage: 0,
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
                    water => water._id === action.payload._id
                );
                state.isLoading = false;
                state.waterTodayRecords[idx].time = action.payload.time;
                state.waterTodayRecords[idx].waterAmount = action.payload.waterAmount;
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
                state.waterTodayRecords = state.waterTodayRecords.filter(item => item._id !== action.payload.id);
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
                state.waterTodayRecords = action.payload.waterRecords;
                state.percentage = action.payload.percentage

            })
            .addCase(getMonthWater.pending, state => {
                state.isLoading = true;
            })
            .addCase(getMonthWater.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getMonthWater.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.waterMonthRecords = action.payload;
            })
    },
});

export const waterReducer = waterSlice.reducer;
