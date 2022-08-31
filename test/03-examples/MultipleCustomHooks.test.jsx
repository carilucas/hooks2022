import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch.js');
jest.mock('../../src/hooks/useCounter.js');

describe('Pruebas en <MultipleCustomHooks>', () => { 
   
   const mockHandleAdd = jest.fn();

   useCounter.mockReturnValue({
      value:10,
      handleAdd: mockHandleAdd, 
   });

   beforeEach( ()=> {
      jest.clearAllMocks();
   })

   test('Debe mostrar el componente por defecto', () => { 

      useFetch.mockReturnValue({
         data:null,
         isLoading: true,
         hasError:null
      })
      
      render( <MultipleCustomHooks />);

      expect( screen.getByText( 'Loading...' )).toBeTruthy();
      expect( screen.getByText( 'Breaking Bad Quotes' )).toBeTruthy();

      const nextButton= screen.getByRole('button', { name:'Next quote'});

      expect( nextButton.disabled ).toBeTruthy()


   });

   test('Debe devolver una respuesta el fetch', () => { 

      useFetch.mockReturnValue({
         data:[ {author: 'Carlos', quote:'Hola mundo'}],
         isLoading: false,
         hasError:null
      })
      
      render( <MultipleCustomHooks />);

      expect( screen.getByText('Hola mundo')).toBeTruthy();
      expect( screen.getByText('Carlos')).toBeTruthy();

      const nextButton= screen.getByRole('button', { name:'Next quote'});
      expect( nextButton.disabled ).toBeFalsy();

   })

   test('Debe llamar la función de incrementar', async () => { 
      
      
      useFetch.mockReturnValue({
         data:[ {author: 'Carlos', quote:'Hola mundo'}],
         isLoading: false,
         hasError:null
      })

      render( <MultipleCustomHooks />);

      const nextButton= screen.getByRole('button', { name:'Next quote'});
      fireEvent.click( nextButton );

      expect( mockHandleAdd ).toHaveBeenCalled()

   })

})