import { createSlice } from '@reduxjs/toolkit';
import { addWaterRecord, editWaterRecord, deletetWaterRecord } from './waterOperations.js'

const initialState = {
    waterTodayRecords: [],
};

const waterSlice = createSlice({
    name: 'water',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(addWaterRecord.fulfilled, (state, action) => {
                state.waterTodayRecords.push(action.payload);
            })
            .addCase(editWaterRecord.fulfilled, (state, action) => {
                const idx = state.waterTodayRecords.findIndex(
                    water => water.id === action.payload.id
                );
                state.waterTodayRecords[idx] = { ...state.waterTodayRecords[idx], ...action.payload }
            })
            .addCase(deletetWaterRecord.fulfilled, (state, action) => {
                // state.waterTodayRecords = щось типу getTodaysWater
            })
    },
});

export const waterReducer = waterSlice.reducer;
