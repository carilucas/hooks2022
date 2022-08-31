import { addTodoAction, doneTodoAction, removeTodoAction, todoReducer } from "../../src/08-useReducer/todoReducer"



describe('Pruebas en el todoReducer', () => { 

   const initialState = [{
      id:1,
      desc:'demo todo',
      done: false
   }]
   
   test('Debe regresar el estado inicial', () => { 

      const newState = todoReducer( initialState, {} );

      expect( newState ).toBe( initialState );

   });

   test('Debe agregar un todo', () => { 
      
      const todo = {id:2, desc:'demo todo 2', done: false}
      const newState = todoReducer( initialState, addTodoAction(todo) );

      expect( newState.length ).toBe(2);
      expect( newState ).toContain( todo );

   });

   test('Debe eliminar un todo', () => { 
      
      const newState = todoReducer( initialState, removeTodoAction(1) );

      expect( newState.length ).toBe(0);
      
      expect( newState ).not.toContain( initialState );

   });

   test('Debe cambiar el done del todo', () => { 
      
      const newState = todoReducer( initialState, doneTodoAction(1) );

      expect( newState[0].done ).toBe( !initialState[0].done );

   })

})