

export const TodoItem = ({id,description,done, onRemoveTodo, onDone}) => {
   

   return (
      <>
         <li 
            className="list-group-item d-flex justify-content-between"
            onClick={ ()=>onDone(id) }
         >
            <span aria-label="span" className={`align-self-center ${done ? 'text-decoration-line-through' : '' }`} >{description}</span>
            <button 
               className="btn btn-danger"
               onClick={ ()=> onRemoveTodo(id) }
            >
               Borrar
            </button>
         </li>
      </>
   )
}
