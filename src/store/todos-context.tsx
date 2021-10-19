import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = function (props) {
  // inicialmente mi estadoo es un array vacio, pero despues sera un item de tipo todo (del de la clse que defini anteriormente)
  const [todos, setTodos] = useState<Todo[]>([]);
  /** tiene la misma estructura que especifique en new todo */
  const addTodoHandler = function (todoText: string) {
    const newTodo = new Todo(todoText);
    /** Recuerda que si mi estado esta basado en el psado, entonces uso esta funcion */
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };
  const removeTodoHandler = function (todoId: string) {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
