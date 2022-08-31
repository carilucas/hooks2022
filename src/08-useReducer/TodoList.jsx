import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem'

export const TodoList = ( { todos = [], onRemoveTodo, onDone } ) => {

   return (
      <>
         <ul className="list-group">
            {
               todos.map( todo => (
                  <TodoItem key={ todo.id } {...todo} onRemoveTodo={onRemoveTodo} onDone={onDone}/>
               ))
            }
         </ul>
      </>
   )
}


TodoList.propTypes= {
   todos: PropTypes.array.isRequired
}
