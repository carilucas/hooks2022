import { useState } from "react"


export const useCounter = (initialState = 10 ) => {
  
   const [value, setValue] = useState(initialState);

   const handleAdd = ( number = 1 )=>{
      setValue( value + number);
   }

   const handleDelete = ( number = 1 )=>{
      if (value <= 0) {
         return
      } else {
         setValue( value - number)
      }
   }

   const handleReset = ()=>{
      setValue( initialState )
   }

   return { value, handleAdd, handleDelete, handleReset}

}
