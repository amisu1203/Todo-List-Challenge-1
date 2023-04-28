import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    title: "예시 제목",
    content: "예시 할 일",
    id: uuidv4(),
    isDone: false,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [action.payload, ...state];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
