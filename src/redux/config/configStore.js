import todos from "../modules/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { todos },
});

export default store;
