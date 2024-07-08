import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../lib/hooks";

export default function AddTodoForm() {
  const { handleAddTodo } = useTodosContext();
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="h-[45px] border border/black[12%] rounded-[5px] 
        my-[9px] text-[12px] block w-full px-[16px]"
      />
      <Button>Add to list</Button>
    </form>
  );
}
