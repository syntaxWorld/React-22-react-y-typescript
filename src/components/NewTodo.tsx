import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

/** Como no voy a retornar nada de la funcion de add todo, por eso el type que especifico para el valor retornado es void. Pero si toma un parametro de
 * que tiene tipo string
 */
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  /** Especifico que quiero que ref guarde. Debo de especificar que su valor inicial es null, que despues sera rellenado con el ref del input  */
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    /** Se le agrega un ? de manera automatica ya que probablemente aun no tenga el valor (que es null) */
    //const enteredTex = todoTextInput.current?.value;
    // le pongo ! ya que estoy seguron de que si recibire el string, y no guardare un valor nulo

    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
