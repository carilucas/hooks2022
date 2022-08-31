import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"


describe('Pruebas en useForm', () => { 
   
   test('Debe regresar los valoresp por defecto', () => { 

      const initialForm = {
         name:'carlos',
         email:'c@g.com',
         pass:'123456'
      }
      
      const { result }= renderHook( ()=> useForm( initialForm ) );

      expect( result.current ).toEqual({
         name: 'carlos',
         email: 'c@g.com',
         pass: '123456',
         formState: { name: 'carlos', email: 'c@g.com', pass: '123456' },
         handleInputChange: expect.any(Function),
         handleReset: expect.any(Function)
       }
      )

    })

    test('Debe cambiar el nombre del formulario', () => { 
      const initialForm = {
         name:'carlos',
         email:'c@g.com',
         pass:'123456'
      }
      const newValue = 'Juan';
      const { result } = renderHook( ()=> useForm( initialForm) );


      const { handleInputChange } = result.current;

      act( ()=>{
         handleInputChange( { target:{ name:'name', value:newValue } } );
      } )

      expect( result.current.name ).toBe(newValue);
      expect( result.current.formState.name ).toBe(newValue);

     })

     test('Debe resetear el formulario', () => { 

         const initialForm = {
            name:'',
            email:'',
            pass:''
         }

         const newValue = 'Juan';
      
         const { result } = renderHook( ()=>useForm( initialForm) );

         const { handleInputChange, handleReset } = result.current;

         act( ()=>{
            handleInputChange({ target: { name:'name', value:newValue} });
            handleReset();
         })

         expect( result.current.name).toBe('');
         expect( result.current.formState.name ).toBe('');
      

      })

 })