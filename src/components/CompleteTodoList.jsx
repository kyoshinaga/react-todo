import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodoList = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div style={style}>
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
