import { useState } from "react";


export const useForm = ( initialState={} ) => {

   const [formState, setFormState] = useState(initialState)

   const handleInputChange = ({target})=>{
      const { name, value } = target;
      setFormState({
         ...formState,
         [name]: value,
      })
   }

   const handleReset = ()=>{
      setFormState( initialState );
   }

   return { ...formState, formState , handleInputChange, handleReset }
}
