import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

   const { value, handleAdd, handleDelete, handleReset } = useCounter(10);

  return (
   <>
    <h1>CounterWithCustomHook</h1>
    <hr />
    <h2>{value}</h2>
    <button className="btn btn-primary" onClick={ ()=>handleAdd(1) }>+1</button>
    <button className="btn btn-primary" onClick={ handleReset }>Reset</button>
    <button className="btn btn-primary" onClick={ ()=>handleDelete(1) }>-1</button>
   </>
  )
}
