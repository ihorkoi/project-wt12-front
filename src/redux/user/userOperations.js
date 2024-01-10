import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUserInfo = createAsyncThunk(
  'auth/fetchuserInfo',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('auth/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const updateUserInfo = createAsyncThunk(
  'auth/updateUserInfo',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.patch(`/auth/`, userData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/updateUserAvatar',
  async (avatarURL, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatarURL', avatarURL);

      const response = await axios.patch(`/auth/avatars/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      return response.data;

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateWaterNorm = createAsyncThunk(
  'auth/updateWaterNorm',
  async (dailyWaterRequirement, thunkAPI) => {
    try {
      const response = await axios.patch(`/auth/update-water-norm`, dailyWaterRequirement);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
