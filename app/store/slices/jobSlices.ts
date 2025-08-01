import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { loginUser } from '../actions'

interface Hub {
  id:string;
  companyName:string;
}

interface AuthState {
  token: string | null;
  userInfo: any | null;
  isApproved: boolean;
  organisations: Hub[]
  isAuthenticated: boolean
}

const initialState: AuthState = {
  token: null,
  userInfo: null,
  isApproved: false,
  organisations: [],
  isAuthenticated:false
}

export const jobSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { token, user } = payload.data;

      state.token = token;
      state.userInfo = user;
      state.isApproved = user?.approved;

      localStorage.setItem("token", token);
      localStorage.setItem("current_user", JSON.stringify(user));
      localStorage.setItem("companyOrg", JSON.stringify(user?.organisations));
    });
  },
})


export const selectAuth = (state: RootState) => state.auth

export default jobSlice.reducer
