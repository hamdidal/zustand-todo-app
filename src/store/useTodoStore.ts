import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text: string) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          text,
        },
      ],
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  resetTodo: () =>
    set((state) => ({
      todos: [],
    })),
}));

export const useTodoStorePersist = create(
  persist<TodoStore>(
    (set) => ({
      todos: [],
      addTodo: (text: string) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              text,
            },
          ],
        })),
      deleteTodo: (id: number) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      resetTodo: () =>
        set(() => ({
          todos: [],
        })),
    }),
    {
      name: "todo-store",
      getStorage: () => localStorage,
    }
  )
);
