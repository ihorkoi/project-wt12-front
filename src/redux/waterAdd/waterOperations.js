import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://localhost:3000';

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ waterAmount, time }, thunkAPI) => {
    try {
      const response = await axios.post('/water', { waterAmount, time });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
