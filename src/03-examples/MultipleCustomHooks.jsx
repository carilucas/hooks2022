import { useCounter, useFetch } from "../hooks/";
import { LoadingComponent, QuoteComponent } from "./";




export const MultipleCustomHooks = () => {

   const { handleAdd, value } = useCounter(1)
   const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${value}`);
   const { author, quote } = !!data && data[0];
   return (
      <>
         <h1>Breaking Bad Quotes</h1>
         <hr />
         {
            isLoading
            ? <LoadingComponent />
            : <QuoteComponent author={author} quote={quote} />
         }
         <button 
            className="btn btn-primary"
            onClick={ ()=>handleAdd() }
            disabled = { isLoading }
         >
            Next quote
         </button>
      </>
   )
}
