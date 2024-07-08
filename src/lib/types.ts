
export type Todo = {
    id: number;
    text: string;
    isCompleted: boolean;
  };
  
export type HeaderCounterProps = {
    totalNumberOfTodos: number;
    numberOfCompletedTodos : number;
}