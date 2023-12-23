import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

export const registerUser = createAsyncThunk(
  'auth/register',
//   'auth/register' - may be smth else, depends on backend

  async (user, thunkAPI) => {
    try {
        const {token} = await axios.post('auth/register',user)
        setToken(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
    'auth/login',
  //   'auth/login' - may be smth else, depends on backend
  
    async (user, thunkAPI) => {
      try {
          const {token} = await axios.post('auth/login', user)
          setToken(token)
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );