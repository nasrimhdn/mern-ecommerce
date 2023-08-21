import { createSlice } from "@reduxjs/toolkit";

const user1Slice = createSlice({
  name: "user1",
  initialState: {
    test: null,
    currentUser1: null,
    isFetching: false,
    error: false,
  },
reducers: {
    loginStart: (state) => {
      state.isFetching  = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser1 = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    setLogout: (state) => {
      state.user1 = null;
      // state.token = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure,setLogout  } = user1Slice.actions;
export default user1Slice.reducer;