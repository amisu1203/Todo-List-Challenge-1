import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Working = () => {
  const todoSlice = useSelector((state) => state.todos);
  return (
    <div>
      Working
      {todoSlice
        .filter((todo) => !todo.isDone)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default Working;
