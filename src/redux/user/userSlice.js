import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dailyWater: [],
  waterNorma: Number(),
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchStorages.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchStorages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
        state.error = null;
      })
      .addCase(fetchStorages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addStorage.pending, state => {
        state.status = 'loading';
      })
      .addCase(addStorage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks.push(action.payload);
        state.error = null;
      })
      .addCase(addStorage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteStorage.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteStorage.fulfilled, (state, action) => {
        state.tasks = state.items.filter(item => item.id !== action.payload.id);
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deleteStorage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const userReducer = userSlice.reducer;
