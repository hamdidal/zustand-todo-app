import { useState } from "react";
import {useTodoStorePersist} from "../store/useTodoStore";
import "../App.scss";

function Persist() {
  const [text, setText] = useState("");
  const { todos, addTodo, deleteTodo, resetTodo } = useTodoStorePersist();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  const handleReset = () => {
    resetTodo();
  };

  return (
    <div className="container">
      <h1 className="header">TO DO List</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="button" disabled={!text} type="submit">
          Add
        </button>
        <button
          className="resetButton"
          onClick={handleReset}
          disabled={todos.length < 1}
        >
          Reset
        </button>
      </form>
      <div className="list">
        {todos.map((todo) => (
          <p className="item" key={todo.id}>
            {todo.text}
            <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Persist;
