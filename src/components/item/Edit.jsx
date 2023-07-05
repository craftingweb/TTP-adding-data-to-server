import React, { useEffect, useState } from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";

export async function loader({ params }) {
  const todoResponse = await fetch(`http://localhost:3000/data/${params.id}`);
  const todo = await todoResponse.json();
  return { todo };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const preparedTodo = {
    ...updates,
  };
  const response = await fetch(`http://localhost:3000/data/${params.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedTodo),
  });

  return redirect("/");
}

const Edit = () => {
  const { todo } = useLoaderData();
  const { title, description } = todo;

  return (
    <Form
      method="PATCH"
      className="flex flex-col items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-5 mt-10 w-full"
    >
      <input
        type="text"
        defaultValue={title}
        className=" w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5"
        placeholder="Task Title"
        name="title"
      />
      <input
        type="text"
        defaultValue={description}
        className="w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5 my-5"
        placeholder="Task Description"
        name="description"
      />
      <button
        type="submit"
        className="text-2xl text-gray-600 rounded-xl bg-gray-800 px-4 py-2 border-2 border-pink-400 hover:bg-pink-400 transition ease-in"
      >
        +
      </button>
    </Form>
  );
};

export default Edit;
// export const Edit = () => {
//   const { id } = useParams();
//   const [todo, setTodo] = useState("");

//   useEffect(() => {
//     async function fetchTodos() {
//       const response = await fetch(`http://localhost:3000/data/${id}`);
//       const todoId = await response.json();
//       setTodo(todoId);
//     }
//     fetchTodos();
//   }, [id]);

//   return (
//     <div className="bg-gray-900 bg-auto h-screen py-10 text-orange-600">
//       <div className="flex flex-col items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-5 mt-10 w-full">
//         <h1 className="font-bold text-blue-300 w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5">
//           {todo.title}
//         </h1>
//         <p className="w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5 my-5 italic text-green-300 ">
//           {todo.description}
//         </p>
//       </div>
//     </div>
//   );
// };
