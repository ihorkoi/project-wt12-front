import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn } from './authOperations';

export const selectIsLoggedIn = store => store.auth.isLoggedIn;


const initialState = {
    user: { email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:builder=>{
        builder
            .addCase(registerUser.fulfilled, (state, action)=>{
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
              })
            
    }
  })

  export const authReducer = authSlice.reducer