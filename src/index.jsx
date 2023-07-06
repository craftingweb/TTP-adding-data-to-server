import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/layout/Layout";
import "./index.css";
import Home from "./components/screens/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as loaderData } from "./components/screens/Home/Home.jsx";
import { action as createTodoAction } from "./components/screens/Home/create-todo-field/CreateTodoField";
import ErrorPage from "./error-page";
import Edit, {
  loader as updateTodoLoader,
  action as updateTodoAction,
} from "./components/item/Edit";
import { Delete } from "./components/item/Delete";
// import { loader as deleteTodoLoader } from "./components/item/Delete";
import { action as deleteTodoAction } from "./components/item/Delete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: loaderData,
    action: createTodoAction,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
    loader: updateTodoLoader,
    action: updateTodoAction,
  },
  {
    path: "/delete/:id",
    // element: <Delete />,
    // loader: deleteTodoLoader,
    action: deleteTodoAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
