import React from 'react';
import '../App.css';
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoListContextProvider from "../context/TodoListContext";

function App() {
  return (
    <TodoListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoListContextProvider>
  );
}

export default App;
