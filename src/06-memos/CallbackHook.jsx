import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
   const [counter, setCounter] = useState(10);

   const incrementFather = useCallback(
     (number) => {
      setCounter( (value) => value + number)
     },
     [],
   )
   

   // const incrementFather = ()=>{
   //    setCounter( counter + 1)
   // }
   return (
      <>
         <h1>UseCallback Hook: {counter}</h1>
         <hr />
         <ShowIncrement increment={incrementFather}/>
      </>
   )
}
