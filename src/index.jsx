import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/layout/Layout";
import "./index.css";
import Home from "./components/screens/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as loaderData } from "./components/screens/Home/Home.jsx";
import { action as createTodoAction } from "./components/screens/Home/create-todo-field/CreateTodoField";
import ErrorPage from "./error-page";
import { Edit } from "./components/item/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: loaderData,
    action: createTodoAction,
    // async action({ params, request }) {
    // params is dynamic parameter inside url
    // request is outgoing http request
    // const formData = await request.formData();
    // formData() return promise
    // in order to read promise we have to convert into object by Object.fromEntries(formData)
    // Object.fromEntries(formData);
    // },
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </Layout>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Layout>
//       <Home />
//     </Layout>
//   </React.StrictMode>
// );
