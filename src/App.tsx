import React, { useState } from "react";
import Task from "./components/Task";
import Form from "./components/Form";
import toast from "react-hot-toast";
import Showbar from "./components/Showbar";

export type status = "wait" | "in progress" | "done";

export interface Todo {
  id: number;
  name: string;
  status: status;
}

const mock: Todo[] = [
  {
    id: 0,
    name: "learning",
    status: "wait",
  },
  {
    id: 1,
    name: "sleep",
    status: "done",
  },
  {
    id: 2,
    name: "working",
    status: "in progress",
  },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(mock);

  const createTodo = (text: string): void => {
    const task: Todo = {
      id: todos.length,
      name: text,
      status: "wait",
    };
    // console.log(task);
    setTodos((prev) => [...prev, task]);
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((i) => i.id !== id));
    toast.success("remove todo success!!");
  };

  const statusTodo = (id: number, newstatus: status): void => {
    setTodos(todos.map((i) => (i.id == id ? { ...i, status: newstatus } : i)));
  };

  const editTodo = (id: number, newname: string): void => {
    setTodos(todos.map((i) => (i.id == id ? { ...i, name: newname } : i)));
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-30">
        <div className="flex justify-center flex-wrap">
          <h1 className="text-2xl font-bold text-center w-full">Todo list</h1>
          <Form createTodo={createTodo} />
          <Showbar todos={todos} />
          {todos.length > 0 ? (
            <div className="p-3 mt-5 shadow-lg w-full rounded-xl">
              {todos.map((i) => (
                <Task
                  key={i.id}
                  todo={i}
                  removeTodo={removeTodo}
                  statusTodo={statusTodo}
                  editTodo={editTodo}
                />
              ))}
            </div>
          ) : (
            <p className="mt-15">No task.</p>
          )}
        </div>
      </div>
    </>
  );
}
