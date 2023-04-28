import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todoSlice";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const dispatch = useDispatch();

  // 입력
  const onChangeTodoHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  // 추가
  const onClickAddHandler = () => {
    const newTodo = {
      title: todo.title,
      content: todo.content,
      id: uuidv4(),
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };
  return (
    <div>
      <h1>My TO DO LIST</h1>
      <input name="title" type="text" value={todo.title} onChange={onChangeTodoHandler} />
      <input name="content" type="text" value={todo.content} onChange={onChangeTodoHandler} />
      <button onClick={onClickAddHandler}>추가하기</button>
    </div>
  );
};

export default Header;
