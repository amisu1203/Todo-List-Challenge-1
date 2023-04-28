import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Done = () => {
  const todoSlice = useSelector((state) => state.todos);
  return (
    <div>
      Done
      {todoSlice
        .filter((todo) => todo.isDone)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default Done;
