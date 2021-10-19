import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
/** Lo que hace react fc es que especifica que esta es una funcion que actua como componente (FC: Functonal component). Typescrio entiende que tengo una funcion
 * que recibe unas props.
 * Mi React.Fc es generico; antes le decia a typescript que el averiguara el tipo de datos que aceptaria, aqui yo se lo indico explicitamente. Lo que le digo
 * es que mi FC es generico, el valor concreto que le ingreso es mi propio objeto props que yo especifico cuando lo uso este componente. Es generico porque
 * diferentes componentes tienen diferentes definiciones de props.
 */
/** Le indico que tendre un array de todo (objetos de la clase todo) */
const Todos: React.FC = function () {
  const todosCtx = useContext(TodosContext);
  return (
    <>
      {/**Uso las props que yo defini en mi componente */}
      <ul className={classes.todos}>
        {todosCtx.items.map(function (item) {
          return (
            <TodoItem
              key={item.id}
              text={item.text}
              onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
