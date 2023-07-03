import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/layout/Layout";
import "./index.css";
import Home from "./components/screens/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as loaderData } from "./components/screens/Home/Home.jsx";
import { UpdateTodo } from "./components/item/UpdateTodo";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: loaderData,
    errorElement: <ErrorPage />,
  },
  {
    path: "/update",
    element: <UpdateTodo />,
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
