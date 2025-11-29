import { Button } from "@/components/ui/button";
import type { status, Todo } from "../App";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState } from "react";
import { Input } from "./ui/input";
import toast from "react-hot-toast";

interface TodoTask {
  todo: Todo;
  removeTodo: (id: number) => void;
  statusTodo: (id: number, newstatus: status) => void;
  editTodo: (id: number, newname: string) => void;
}

export default function Task({
  todo,
  removeTodo,
  statusTodo,
  editTodo,
}: TodoTask) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(todo.name);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    editTodo(todo.id, newName);
    toast.success("edit success");
    setIsEdit(false);
  };

  return (
    <>
      {!isEdit ? (
        <div
          className="flex justify-between px-3 py-3"
          onClick={() => setIsEdit(!isEdit)}
          style={{ cursor: "pointer" }}
        >
          <h3>{todo.name}</h3>
          <div className="flex gap-8">
            {/* <Button>Update</Button> */}
            <Select
              value={todo.status}
              onValueChange={(v) => statusTodo(todo.id, v as status)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={todo.status} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wait">wait</SelectItem>
                <SelectItem value="in progress">In progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
            <Button variant={"outline"} onClick={() => removeTodo(todo.id)}>
              Delete
            </Button>
          </div>
        </div>
      ) : (
        <form
          className="flex justify-between px-3 py-3 gap-3"
          onSubmit={handleSubmit}
        >
          <Input
            defaultValue={todo.name}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Button type="submit">save</Button>
        </form>
      )}
    </>
  );
}
