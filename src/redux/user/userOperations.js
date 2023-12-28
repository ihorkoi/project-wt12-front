import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = '';

export const fetchStorages = createAsyncThunk(
  'storages/fetchStorages',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/storages');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addStorage = createAsyncThunk(
  'storages/addStorage',
  async ({ count }, thunkApi) => {
    try {
      const respone = await axios.post('/storages', { count });
      return respone.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteStorage = createAsyncThunk(
  'storages/deleteStorage',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/storages/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
