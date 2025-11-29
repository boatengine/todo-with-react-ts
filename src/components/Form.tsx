import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

interface TodoFormProps {
  createTodo: (text: string) => void;
}

export default function Form({ createTodo }: TodoFormProps) {
  const [name, setName] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name == "") {
      toast.error("please enter your task");
      return;
    }
    createTodo(name);
    setName(" ");
  };
  return (
    <>
      <form
        className="p-5 flex gap-3 shadow-lg w-full rounded-xl"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Enter your Task "
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Button>Add task.</Button>
      </form>
    </>
  );
}
