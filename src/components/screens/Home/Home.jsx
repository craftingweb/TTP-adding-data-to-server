import { useState, useEffect } from "react";
import TodoItem from "../../item/TodoItem";
import { CreateTodoField } from "./create-todo-field/CreateTodoField";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { Layout } from "../../layout/Layout";

export async function loader() {
  const response = await fetch("http://localhost:3000/data");
  const todosData = await response.json();
  return { todosData };
}

const Home = () => {
  const { todosData } = useLoaderData();
  // const [todos, setTodos] = useState(todosData);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };
  // remove Todo
  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // add ToDo
  const addTodo = (newItem) => {
    setTodos([newItem, ...todos]);
  };

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">
        Todo For Junior Developer
      </h1>

      {todosData.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField
        addTodo={addTodo}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};
export default Home;
