import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-wt12.onrender.com/api';


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
  async (waterrate, thunkAPI) => {
    try {
      const response = await axios.post('/');
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
