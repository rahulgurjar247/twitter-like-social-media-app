import { configureStore } from "@reduxjs/toolkit";
import userlogin from "../feature/islogin";
const store = configureStore({
  reducer: {
    islogin: userlogin,
  },
});

export default store;
