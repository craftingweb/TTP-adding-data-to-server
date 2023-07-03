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
import { UpdateTodo } from "../../item/UpdateTodo";

// const Root = () => {
//   return (
//     <>
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/todo">Todo</Link>
//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </>
//   );
// };
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="/update" element={<UpdateTodo />} />

//     </Route>
//   )
// );

export async function loader() {
  const response = await fetch("http://localhost:3000/data");
  const todosData = await response.json();
  console.log(todosData);
  return { todosData };
}

const Home = () => {
  const { todosData } = useLoaderData();
  const [todos, setTodos] = useState(todosData);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useEffect(() => {
  //   async function fetchTodos() {
  //     const response = await fetch("http://localhost:3000/todos");
  //     const todoArray = await response.json();
  //     setTodos(todoArray);
  //   }
  //   fetchTodos();
  // }, []);

  // const filteredtodos = todos.filter((job) => true);

  // const jobCards = filteredtodos.map((job) => {
  //   return <JobCard job={job} key={job.id} />;
  // });

  // return <>{jobCards}</>;

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
      {/* <RouterProvider router={router} /> */}
      <h1 className="text-2xl font-bold text-center mb-8">
        Todo For Junior Developer
      </h1>

      {todos.map((todo) => (
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
