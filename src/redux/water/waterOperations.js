import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { dailyWaterRequirement, dailyWaterRequirement } from "redux/selectors";

export const addWaterRecord = createAsyncThunk(
    "waterrate/addWater",
    async (water, thunkAPI) => {
        const { time, waterAmount } = water;
        const dailyWaterRequirement = useSelector(dailyWaterRequirement)
        try {
            const response = await axios.post("/waterrate/", { waterAmount, time, dailyWaterRequirement },);
            const data = response.data;
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
        const { _id, time, waterAmount } = water;
        try {
            const response = await axios.put(`/waterrate/${_id}`, { waterAmount, time });
            const data = response.data;
            return data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deletetWaterRecord = createAsyncThunk(
    "waterrate/deleteWater",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/waterrate/${id}`);
            const data = response.data;
            return data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getTodayWater = createAsyncThunk(
    "today/getTodayWater",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/today/');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const getMonthWater = createAsyncThunk(
    "waterrate/getMonthWater",
    async (date, thunkAPI) => {
        try {
            const response = await axios.get('/waterrate/getMonthWater/', { params: { date } });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    })