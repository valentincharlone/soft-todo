import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../lib/hooks";

export default function TodoList() {

  const {todos, handleToggleTodo, handleDeleteTodo} = useTodosContext();
  return (
    <ul>
      {todos.length === 0 ? (
        <li className="text-center text-[14px] py-8">
          No todos, what's next? Add one above!
        </li>
      ) : (
        todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
            onClick={() => handleToggleTodo(todo.id)}
          >
            <span
              className={`${
                todo.isCompleted ? "line-through text-[#ccc]" : ""
              }  `}
            >
              {todo.text}
            </span>
            <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
          </li>
        ))
      )}
    </ul>
  );
}
