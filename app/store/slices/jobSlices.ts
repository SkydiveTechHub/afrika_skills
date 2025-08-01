import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface JobDataProps {
  id:string;
  jobTitle:string;
}

interface AuthState {
  jobData:JobDataProps[];
}

const initialState: AuthState = {
  jobData:[]
}

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {

  },
  // extraReducers: (builder) => {
  //   builder.addCase(loginUser.fulfilled, (state, { payload }) => {
  //     const { token, user } = payload.data;

  //     state.token = token;
  //     state.userInfo = user;
  //     state.isApproved = user?.approved;

  //     localStorage.setItem("token", token);
  //     localStorage.setItem("current_user", JSON.stringify(user));
  //     localStorage.setItem("companyOrg", JSON.stringify(user?.organisations));
  //   });
  // },
})


export const selectAuth = (state: RootState) => state.auth

export default jobSlice.reducer
