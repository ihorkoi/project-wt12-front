import { createSlice } from '@reduxjs/toolkit';
import { addWaterRecord, editWaterRecord, deletetWaterRecord } from './waterOperations.js'

const initialState = {
    waterTodayRecords: [
        // {
        //     "_id": "659943264af493dcfd6f64aa",
        //     "waterAmount": "500",
        //     "time": "14:11",
        //     "owner": "658c5ef82dee29032d0379c3"
        // },
        // {
        //     "_id": "659946dba6589be166d412f3",
        //     "waterAmount": "120",
        //     "time": "12:00",
        //     "owner": "658c5ef82dee29032d0379c3",
        //     "createdAt": "2024-01-06T12:26:03.530Z",
        //     "updatedAt": "2024-01-06T12:26:03.530Z"
        // },
        // {
        //     "_id": "65994dc249bfaac4f669aff2",
        //     "waterAmount": "720",
        //     "time": "12:00",
        //     "owner": "658c5ef82dee29032d0379c3",
        //     "createdAt": "2021-10-10T00:00:00.000Z",
        //     "updatedAt": "2024-01-06T12:26:03.530Z"
        // }
    ],
    waterMonthRecords: [],
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
