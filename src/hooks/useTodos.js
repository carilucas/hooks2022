import { useEffect, useReducer } from "react";
import { addTodoAction, doneTodoAction, removeTodoAction, todoReducer } from "../08-useReducer/todoReducer";


export const useTodos = () => {
   const initialState=[];

   const init = ()=>{
      return JSON.parse(localStorage.getItem( 'todos' )) || [];
   }

   const [ todos, dispatch ] = useReducer( todoReducer , initialState , init);

   useEffect(() => {
      localStorage.setItem( 'todos' , JSON.stringify(todos) );
    }, [todos]);
    
 
    const handleNewTodo = ( todo )=>{
       dispatch(
          addTodoAction(todo)
       );
    }
 
    const handleRemoveTodo = ( id )=>{
       dispatch( 
          removeTodoAction(id)
       )
    }
 
    const handleDone = (id)=>{
       dispatch(
          doneTodoAction(id)
       )
    }

    const todosCount = todos.length;

    const pendingCount = todos.filter( todo => todo.done === false );


  return { todos, todosCount,  pendingCount, handleNewTodo, handleRemoveTodo, handleDone }
}
