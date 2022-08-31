import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = ( iterationNumber=100 )=>{
   for (let i = 0; i < iterationNumber; i++) {
      console.log('ahí vamos')
      
   }

   return `Iteration number: ${iterationNumber}`
}

export const MemorizeHook = () => {

   const { handleAdd , value } = useCounter(100);
   const [show, setShow] = useState(true);

   const memorizedValue = useMemo(() => heavyStuff(value), [value])

   return (
      <>
         <h1>Counter: <small> {value } </small></h1>
         <hr />
         <h4>{ memorizedValue }</h4>
         <button
            className="btn btn-primary"
            onClick={ ()=>handleAdd() }
         >
            +1
         </button>

         <button
            className="btn btn-outline-primary"
            onClick={ ()=>setShow(!show) }
         >
            Show/hide {JSON.stringify(show)}
         </button>
      </>
   )
}
