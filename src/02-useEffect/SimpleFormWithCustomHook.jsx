
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const SimpleFormWithCustomHook = () => {

   const { formState, handleInputChange, handleReset, userName, email, password } = useForm({
      userName:'',
      email:'',
      password:'',
   })

   // const { userName, email, password } = formState;

   return (
      <>
         <h1>Formulario simple</h1>
         <hr />
         <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="userName"
            value={ userName }
            onChange={ handleInputChange }
         />
         <input 
            type="email" 
            className="form-control mt-2"
            placeholder="mail@mail.com"
            name="email"
            value={ email }
            onChange={ handleInputChange }
         />
         <input 
            type="password" 
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ handleInputChange }
         />
         <button 
            className="btn btn-primary mt-2"
            onClick={ handleReset }
         >
            Borrar
         </button>
         {
            userName === 'Carlos2' && <Message />
         }
      </>
   )
}
