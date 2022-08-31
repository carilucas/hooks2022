import { useTodos } from "../hooks/";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {

   const { todos, todosCount, pendingCount, handleNewTodo, handleRemoveTodo, handleDone } = useTodos();
   
   
   return (
      <>
         <h1>Todo App {todosCount}, <small> pendientes: { pendingCount }</small></h1>
         <hr />
         <div className="row">
            <div className="col-7">
               <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onDone={handleDone} />
            </div>
            <div className="col-5">
               <h4>Agregar TODO</h4>
               <hr />
               <TodoAdd handleNewTodo = { handleNewTodo }/>
            </div>
         </div>
      </>
   )
}
