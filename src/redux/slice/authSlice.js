import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  email: null,
  userName: null,
  userID: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { email, userID, userName } = action.payload;
      state.isLoggedin = true;
      state.email = email;
      state.userID = userID;
      state.userName = userName;
    },
    REMOVE_ACTIVE_USER: (state, action) => {
      state.isLoggedin = false;
      state.email = null;
      state.userID = null;
      state.userName = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedin;
export const selectUserName = (state) => state.auth.userName;
export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
