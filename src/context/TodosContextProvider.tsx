import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodosContextProviderProps = {
  children: React.ReactNode;
};
type TypeTodosContext = {
  todos: Todo[];
  handleAddTodo: (value: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
};

export const TodosContext = createContext<TypeTodosContext | null>(null);

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const { isAuthenticated } = useKindeAuth();
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const response = await fetch('https://bytegrad.com/course-assets/api/todos')
  //     const data = await response.json();
  //     setTodos(data)
  //   }
  //   fetchTodos()
  // }, [])

  const handleAddTodo = (value: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert("log in to add moren than 3 todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: value,
          isCompleted: false,
        },
      ]);
    }
  };
  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;
  return (
    <TodosContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
        totalNumberOfTodos,
        numberOfCompletedTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
