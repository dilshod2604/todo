"use client";
import { usePostToDoMutation } from "@/app/redux/api/todo";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface InputValue {
  title: string;
}
const TodoInput = () => {
  const { register, handleSubmit } = useForm<InputValue>();
  const [postToDo] = usePostToDoMutation();
  const onSubmit: SubmitHandler<InputValue> = (value) => {
    postToDo({
      title: value.title,
      isChecked: false,
    });
  };
  return (
    <section>
      <div className="container">
        <div className="flex flex-col p-4">
          <h1 className="text-white text-3xl font-bold">Todo list</h1>
          <form
            className="flex w-full gap-x-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="w-full bg-neutral-100 px-2 rounded-md"
              type="text"
              placeholder="title"
              {...register("title")}
            />
            <button className="bg-blue-500 px-6 py-2 rounded-md text-white font-bold hover:opacity-75">
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TodoInput;
