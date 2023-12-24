import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  axios.defaults.headers.common.Authorization = ``;
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

export const login = createAsyncThunk(
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

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
  
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      const response = await axios.get('/auth/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);