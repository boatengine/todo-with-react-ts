import type { Todo } from "@/App";
import StatusCard from "./StatusCard";

interface TodoShowbar {
  todos: Todo[];
}

export default function Showbar({ todos }: TodoShowbar) {
  //   console.log(todos);
  const counts = todos.reduce(
    (acc, todo) => {
      acc[todo.status] = (acc[todo.status] || 0) + 1;
      return acc;
    },
    { wait: 0, "in progress": 0, done: 0 } as Record<
      "wait" | "in progress" | "done",
      number
    >
  );
  console.log(counts);

  return (
    <div className="flex gap-3 w-full justify-between mt-5">
      <StatusCard count={counts.wait} label={"wait"} color={"text-blue-400"} />
      <StatusCard
        count={counts["in progress"]}
        label={"In progres"}
        color={"text-yellow-400"}
      />
      <StatusCard
        count={counts.done}
        label={"Done"}
        color={"text-emerald-400"}
      />
    </div>
  );
}
