import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Math.random(), text, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="my-4">
      <h2>Todo List</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.elements.newTodo.value;
          addTodo(text);
          e.target.elements.newTodo.value = "";
        }}
      >
        <input
          type="text"
          name="newTodo"
          placeholder="Add a new todo"
          className="border rounded px-2 py-1 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={removeTodo}
            onToggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
