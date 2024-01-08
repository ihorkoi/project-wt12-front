import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addWaterRecord = createAsyncThunk(
    "waterrate/addWater",
    async (water, thunkAPI) => {
        const { time, waterAmount } = water;
        try {
            const data = await axios.post("/waterrate/", { waterAmount, time });
            console.log('inside')
            return data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const editWaterRecord = createAsyncThunk(
    "waterrate/updatetWater",
    async (water, thunkAPI) => {
        const { id, time, waterAmount } = water;
        try {
            const data = await axios.put(`/waterrate/${id}`, { waterAmount, time });
            return data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deletetWaterRecord = createAsyncThunk(
    "waterrate/deleteWater",
    async (water, thunkAPI) => {
        const { id, time, waterAmount } = water;
        try {
            const data = await axios.put(`/waterrate/${id}`, { waterAmount, time });
            return data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getTodayWater = createAsyncThunk(
    "waterrate/getTodayWater",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/waterrate/getTodayWater');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const getMonthWater = createAsyncThunk(
    "waterrate/getMonthWater",
    async (date, thunkAPI) => {
        try {
            console.log(date.date)
            const response = await axios.get('/waterrate/getMonthWater/', { params: { date } });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    })