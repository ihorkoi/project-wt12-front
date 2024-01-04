import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://localhost:3000/api';

export const fetchAllConsumption = createAsyncThunk(
  'waterrate/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/waterrate');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWatter = createAsyncThunk(
  'waterrate/addWater',
  async (drinkingWater, thunkAPI) => {
    try {
      const response = await axios.post('/waterrate', drinkingWater);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWatter = createAsyncThunk(
  'waterrate/deleteWatter',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/waterrate/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'waterrate/editWater',
  async (record, thunkAPI) => {
    try {
      const response = await axios.put(`/waterrate/${record.id}`, {
        waterAmount: record.milliliters,
        time: record.time,
      }); 
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
