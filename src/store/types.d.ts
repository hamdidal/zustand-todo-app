type Todo = {
  id: number;
  text: string;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  resetTodo: () => void;
};
