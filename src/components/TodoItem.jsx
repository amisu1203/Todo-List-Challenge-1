import React from "react";
import { useSelector } from "react-redux";

const TodoItem = ({ todo }) => {
  const todoSlice = useSelector((state) => state.todos);

  return (
    <>
      {todo.isDone ? (
        <>
          <div>
            {todo.title}
            {todo.content}
          </div>
        </>
      ) : (
        <>
          <div>
            {todo.title}
            {todo.content}
          </div>
        </>
      )}
    </>
  );
};

export default TodoItem;
