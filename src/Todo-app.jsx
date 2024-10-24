import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id));
  };


  let markAsDone = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let upperCaseAll = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let markAllDone = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };


  return (
    <div>
      <input
        placeholder="Add Todo Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button> <br />
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button> <br />
      <br />
      <button onClick={markAllDone}>Mark All As Done</button> <br />
      <br />
    </div>
  );
}
