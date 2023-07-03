import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/layout/Layout";
import "./index.css";
import Home from "./components/screens/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UpdateTodo } from "./components/item/UpdateTodo";
import ErrorPage from "./error-page";

// export async function loader() {
//   const response = await fetch("http://localhost:3000/jobs");
//   const jobs = await response.json();
//   return { jobs };
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
