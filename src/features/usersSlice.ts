import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../types/User';
import { fetchUsers } from '../api/users';

export interface UsersState {
  users: User[];
  loaded: boolean;
  hasError: boolean;
}

const initialState: UsersState = {
  users: [],
  loaded: true,
  hasError: false,
};

export const loadUsers = createAsyncThunk('users/fetch', async () => {
  return await fetchUsers();
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loaded = false;
        state.hasError = false;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loaded = true;
        state.hasError = false;
      })
      .addCase(loadUsers.rejected, (state) => {
        state.loaded = true;
        state.hasError = true;
      });
  },
});

export const { actions } = usersSlice;
export const usersThunks = { loadUsers };
export default usersSlice.reducer;
