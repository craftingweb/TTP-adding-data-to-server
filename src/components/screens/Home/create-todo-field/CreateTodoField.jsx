import React, { useState } from "react";
import { redirect } from "react-router-dom";

export async function action({ request, params }) {
  let formData = await request.formData();
  let jobData = Object.fromEntries(formData);

  const response = await fetch("http://localhost:3000/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });
  return redirect("/");
}

export const CreateTodoField = ({
  addTodo,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  const handleAddJobFormSubmit = async (e) => {
    e.preventDefault();

    const preparedTodo = {
      title,
      isCompleted: false,
      description,
    };

    const response = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedTodo),
    });

    const newTodo = await response.json();

    addTodo(newTodo);
  };
  return (
    <form
      onSubmit={handleAddJobFormSubmit}
      className="flex flex-col items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-5 mt-10 w-full"
    >
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className=" w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5"
        placeholder="Task Title"
        name="titleName"
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5 my-5"
        placeholder="Task Description"
        name="descriptionTodo"
      />
      <button
        type="submit"
        className="text-2xl text-gray-600 rounded-xl bg-gray-800 px-4 py-2 border-2 border-pink-400 hover:bg-pink-400 transition ease-in"
      >
        +
      </button>
    </form>
  );
};
