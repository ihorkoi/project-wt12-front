import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-wt12.onrender.com/api';

export const fetchAllConsumption = createAsyncThunk(
  'water/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/water');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWatter = createAsyncThunk(
  'water/addWater',
  async (drinkingWater, thunkAPI) => {
    try {
      const response = await axios.post('/water', drinkingWater);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWatter = createAsyncThunk(
  'water/deleteWatter',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/water/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async (record, thunkAPI) => {
    try {
      const response = await axios.put(`/water/${record.id}`, {
        waterAmount: record.milliliters,
        time: record.time,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
