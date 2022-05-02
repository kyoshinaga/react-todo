import React, { useState } from "react";
import "./style.css";

import { InputTodo } from "./components/InputTodo";
import { IncompleteTodoList } from "./components/IncompleteTodoList";
import { CompleteTodoList } from "./components/CompleteTodoList";

export const App = () => {
  const [todoText, setTodoText] = useState();
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const limitLength = 5;

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickComplete = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    onClickDelete(index);
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= limitLength}
      />
      {incompleteTodos.length >= limitLength && (
        <p style={{ color: "red" }}>
          登録可能上限（{limitLength}個）に達しました。消化してください。
        </p>
      )}
      <IncompleteTodoList
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodoList todos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};
