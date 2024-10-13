"use client";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoQuery,
} from "@/app/redux/api/todo";
import { useEditStore } from "@/app/store/useTodoStore";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const TodpItems = () => {
  const { data } = useGetTodoQuery();
  const [editTodo] = useEditTodoMutation();
  const { id, setId, setIsEdit, isEdit, value, setIsValue } = useEditStore();

  const [delteTodo] = useDeleteTodoMutation();
  const handleDelete = async (id: string) => {
    await delteTodo(id);
  };

  const handleEdit = (todo_id: string, title: string) => {
    setId(todo_id);
    setIsEdit(true);
    setIsValue(title);
  };

  const edit = async (id: string) => {
    await editTodo({
      id: id,
      update: value,
    });
    setIsEdit(false);
  };

  return (
    <section>
      <div className="container">
        <ul className="flex flex-col gap-y-4 p-4">
          {data?.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-neutral-200 rounded-xl px-2 py-2"
            >
              {item._id === id && isEdit ? (
                <div className="flex items-center justify-between bg-neutral-300 px-4 py-1 rounded-md gap-x-4">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setIsValue(e.target.value)}
                  />
                  <FaCircleCheck
                    className="text-black"
                    onClick={() => edit(item._id)}
                  />
                </div>
              ) : (
                <p>{item.title}</p>
              )}

              <div className="flex items-center gap-x-4">
                <MdDelete
                  size={25}
                  className="text-red-500 hover:opacity-75"
                  onClick={() => handleDelete(item._id)}
                />
                <MdEdit
                  size={25}
                  className="text-black hover:opacity-75"
                  onClick={() => handleEdit(item._id, item.title)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TodpItems;
