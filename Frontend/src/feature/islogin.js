import { createSlice } from "@reduxjs/toolkit";

const state = {
  islogin: false,
};

const userlogin = createSlice({
  name: "userlogin",
  initialState: {
    islogin: false,
  },
  reducers: {
    setlogin: (state) => {
      state.islogin = true;
    },
    removelogin: (state) => {
      state.islogin = false;
    },
  },
});

export const { setlogin, removelogin } = userlogin.actions;
export default userlogin.reducer;
