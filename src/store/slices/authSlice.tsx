// src/redux/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  token: string;
  email: string;
  fullName: string;
}

interface AuthState {
  user: UserState | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
