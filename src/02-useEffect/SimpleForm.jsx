import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

   const [formState, setFormState] = useState({
      username: 'Carlos',
      email: 'carlos@gmail.com'
   })

   const { username, email } = formState;

   const handleChange = ({target})=>{
      const { name, value } = target;
      setFormState({
         ...formState,
         [name]: value,
      })
   }

   // useEffect(() => {

   //    console.log('useeffect')
     
   // }, []);

   // useEffect(() => {

   //    console.log('formstate')
     
   // }, [formState]);
   

   return (
      <>
         <h1>Formulario simple</h1>
         <hr />
         <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ handleChange }
         />
         <input 
            type="email" 
            className="form-control mt-2"
            placeholder="mail@mail.com"
            name="email"
            value={ email }
            onChange={ handleChange }
         />
         {
            username === 'Carlos2' && <Message />
         }
      </>
   )
}
