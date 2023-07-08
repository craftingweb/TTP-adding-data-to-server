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
      className="flex flex-col items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-5 mt-10 w-full h-[25rem]"
    >
      <input
        type="text"
        defaultValue={title}
        className=" w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5 text-yellow-200"
        placeholder="Task Title"
        name="title"
      />
      <input
        type="text"
        defaultValue={description}
        className="w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5 my-5 text-yellow-200"
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
/*
we have to give descriptive names, on what we doing it and what is doing it

we use loader and action in one component just before component definition and then we have to routes component and import them there as aliases before it will be different loaders and actions

params is what will be after :  /:id

when word fetch is taking data from server 

return Form with capital letter 

with loader we fetching / getting all objects/or specific object and at the end of loader we have to return this object and then in component to use useLoaderData() and assign it to that object that we return in loader in order to uset it, but also have to destructure this object it in a variables in order to use them in our application

in action at the end if we finish updating then redirect to home page but if we use in home page action we just return null

we also have to use defaultValue 

Lighthouse statistics use for resume

Cmnd Shift L -- to find all instances of selected word

Search icon for word and it will show all instrances for all components and we can replace it there. 

we have to import useLoaderData, Form, redirect in that component
*/
