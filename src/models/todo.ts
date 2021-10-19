/** Nota que no es un archivo tsx ya que no me interesa retornar un componente. Solo quiero especificar como luce una todo. Aqui especifico que la todo
 * debe de tener un id y un texto
 */
class Todo {
  /** defino los tipos tanto para las propiedades como para el constructor */
  id: string;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
