import React from "react";

export const IncompleteTodoList = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo + index}>
              <div className="list-row">
                <p className="list-title">{todo}</p>
                <button onClick={() => onClickComplete(index)}>Done</button>
                <button onClick={() => onClickDelete(index)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
