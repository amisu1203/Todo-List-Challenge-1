import React, { useState } from "react";

const Header = () => {
  const [todo, setTodo] = useState({ title: "", content: "" });

  // 입력
  const onChangeTodoHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ [name]: value });
  };

  // 추가
  const onClickAddHandler = () => {};
  return (
    <div>
      Header
      <input name="title" type="text" value={todo.title} onChange={onChangeTodoHandler} />
      <input name="content" type="text" value={todo.content} onChange={onChangeTodoHandler} />
      {/* <button onClick={onClickAddHandler}>추가하기</button> */}
    </div>
  );
};

export default Header;
