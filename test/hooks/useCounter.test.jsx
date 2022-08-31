import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"


describe('Pruebas en useCountes', () => { 
   
   test('Debe retornar los valores por defecto', () => { 
      
      const { result } = renderHook( ()=> useCounter() );

      const { value, handleAdd, handleDelete, handleReset } = result.current;
      
      expect( value ).toBe( 10 );
      expect( value ).toEqual( expect.any( Number) );
      expect( handleAdd ).toEqual( expect.any( Function) );
      expect( handleDelete ).toEqual( expect.any( Function) );
      expect( handleReset ).toEqual( expect.any( Function) );

   })

   test('Debe generar el counter con el valor de 100 ', () => { 
      
      const { result } = renderHook( ()=> useCounter(100) );
      const { value } = result.current;
      expect( value ).toBe( 100 );
      
    })

   test('Debe cambiar los valores el handleAdd, handleDelete, handleReset', () => { 
      
      const { result } = renderHook( ()=> useCounter() );

      const { value, handleAdd, handleDelete, handleReset } = result.current;

      act( ()=>{
         handleAdd();
      });

      expect( result.current.value ).toBe( 11 );

      act( ()=>{
         handleDelete();
      });

      expect( result.current.value ).toBe( 9 );
      
      act( ()=>{
         handleDelete();
         handleReset();
      });

      expect( result.current.value ).toBe( 10 );


    })

 })