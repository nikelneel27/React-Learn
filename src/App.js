import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([""]);
  const [todo, setTodo] = useState("");


  useEffect(() => {
    const data = localStorage.getItem("todos");
    const localTodos = JSON.parse(data);

    if (localTodos) {
      // setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(todos);
    // localStorage.setItem("todos", data);

  }, [todos]);

  const handleSubmit = ((e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
    }
    setTodos([...todos, newTodo]);
    setTodo("");
  });

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

  };

  return (
    <div className="todo-app">
      <h1>What is the plan for the day ? </h1>

      <form className="todo-app-form" onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Enter the text here !"
          required
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="todo-list">
        {todos.map((todo) =>
          <div key={todo.id}>
            {console.log("dfgh", todo)}
            <div className="todo-text-list">
              {todo.text}
            </div>
            <button id="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>)}
      </div>
    </div>
  );
}

export default App;
