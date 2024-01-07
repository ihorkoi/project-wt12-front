import { createSlice } from '@reduxjs/toolkit';
import { updateUserInfo } from './userOperations';

const initialState = {
  avatar: '',
  name: '',
  dailyNorma: 0,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(updateUserInfo.pending, state => {
        state.status = 'loading';
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.avatar = action.payload.avatar;
        state.name = action.payload.name;
        state.dailyNorma = action.payload.dailyNorma;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
  // .addCase(fetchStorages.pending, state => {
  //   state.status = 'loading';
  // })
  // .addCase(fetchStorages.fulfilled, (state, action) => {
  //   state.status = 'succeeded';
  //   state.tasks = action.payload;
  //   state.error = null;
  // })
  // .addCase(fetchStorages.rejected, (state, action) => {
  //   state.status = 'failed';
  //   state.error = action.error.message;
  // })
  // .addCase(addStorage.pending, state => {
  //   state.status = 'loading';
  // })
  // .addCase(addStorage.fulfilled, (state, action) => {
  //   state.status = 'succeeded';
  //   state.tasks.push(action.payload);
  //   state.error = null;
  // })
  // .addCase(addStorage.rejected, (state, action) => {
  //   state.status = 'failed';
  //   state.error = action.error.message;
  // })
  // .addCase(deleteStorage.pending, state => {
  //   state.status = 'loading';
  // })
  // .addCase(deleteStorage.fulfilled, (state, action) => {
  //   state.tasks = state.items.filter(item => item.id !== action.payload.id);
  //   state.status = 'succeeded';
  //   state.error = null;
  // })
  // .addCase(deleteStorage.rejected, (state, action) => {
  //   state.status = 'failed';
  //   state.error = action.error.message;
  // });
});

export const userReducer = userSlice.reducer;
export { updateUserInfo };
