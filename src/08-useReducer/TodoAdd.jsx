import PropTypes from 'prop-types'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({handleNewTodo}) => {

   const { handleInputChange, handleReset, description } = useForm({ description: '' });

   const onNewTodo = (e)=>{
      e.preventDefault();
      if (description.length <= 1 ) return;
      const newTodo = {
         id: new Date().getTime() * 3,
         description,
         done:false
      }
      handleNewTodo(newTodo);
      handleReset();
   }

   return (
      <>
         <form onSubmit={ onNewTodo }>
            <input 
               type="text" 
               name="description" 
               placeholder="¿Que hay que hacer?"
               className="form-control"
               value={ description }
               onChange={ handleInputChange }
            />
            <button 
               type="submit"
               className="btn btn-primary mt-2"
            >
               Agregar
            </button>
         </form>     
      </>
   )
}

TodoAdd.propTypes= {
   handleNewTodo: PropTypes.func.isRequired
}