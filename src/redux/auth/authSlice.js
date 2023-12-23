import { createSlice, createReducer } from '@reduxjs/toolkit';
import { registerUser, logIn } from './authOperations';

const initialState = {
    user: { email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:builder=>{}
  })

  export const authReducer = authSlice.reducer