import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Edit = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState("");

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(`http://localhost:3000/data/${id}`);
      const todoId = await response.json();
      setTodo(todoId);
    }
    fetchTodos();
  }, [id]);
  return (
    <div className="bg-gray-900 bg-auto h-screen py-10 text-orange-600">
      <div className="flex flex-col items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-5 mt-10 w-full">
        <h1 className="font-bold text-blue-300 w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5">
          {todo.title}
        </h1>
        <p className="w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5 my-5 italic text-green-300 ">
          {todo.description}
        </p>
      </div>
    </div>
  );
};

// const response = await fetch("http://localhost:3000/data", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(preparedTodo),
//   });
