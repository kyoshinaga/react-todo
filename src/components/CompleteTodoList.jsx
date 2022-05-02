import React from "react";

export const CompleteTodoList = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo + index}>
              <div className="list-row">
                <p className="list-title">{todo}</p>
                <button onClick={() => onClickReturn(index)}>Return</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
