import React from "react";
import "./style.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>aaa</li>
          <button>Done</button>
          <button>Delete</button>
        </ul>
      </div>
    </>
  );
};
