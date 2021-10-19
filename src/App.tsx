import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import "./App.css";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      {/**Ahora typescript me obliga a ingresar las props en la forma en que yo especifique en el modulo que estoy llamando aqui */}
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
