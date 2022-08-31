import React, { useRef } from 'react'

export const FocusScreen = () => {

   const inputRef = useRef();

   const onClick = ()=>{
      inputRef.current.select();
   }
   return (
      <>
         <h1>FocusScreen</h1>
         <hr />
         <input 
            className='form-control'
            type="text"   
            ref={ inputRef} 
            placeholder="Ingrese su nombre" 
         />
         <button 
            className='btn btn-primary mt-2'
            onClick={ onClick }
         >
            Focus
         </button>
      </>
  )
}
