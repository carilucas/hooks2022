import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"


describe('pruebas en <TodoItem>', () => { 

   const todo = {
      id:1,
      desc: "hacer algo",
      done:false
   }
   const onRemoveTodoMock = jest.fn();
   const onDoneMock = jest.fn();

   beforeEach( ()=> jest.clearAllMocks( ) );
   
   test('Debe mostrar el todo pendiente de completar', () => { 
      
      render( <TodoItem 
               id={todo.id} 
               description={ todo.desc } 
               done={ todo.done } 
               onRemoveTodo={ onRemoveTodoMock} 
               onDone={onDoneMock}
               /> );

      const liElement = screen.getByRole('listitem');
      expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

      const spanElement = screen.getByLabelText('span');
      expect( spanElement.className).toBe('align-self-center ');
      expect( spanElement.className).toContain('align-self-center');
      expect( spanElement.className).not.toContain('text-decoration-line-through');
   });

   test('Debe mostrar el todo completado', () => { 
      
      todo.done = true;

      render( <TodoItem 
               id={todo.id} 
               description={ todo.desc } 
               done={ todo.done } 
               onRemoveTodo={ onRemoveTodoMock} 
               onDone={onDoneMock}
               /> );

      const liElement = screen.getByRole('listitem');
      expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

      const spanElement = screen.getByLabelText('span');
      expect( spanElement.className).toBe('align-self-center text-decoration-line-through');
      expect( spanElement.className).toContain('align-self-center');
      expect( spanElement.className).toContain('text-decoration-line-through');
   });
   
   test('El li Debe llamar el doneTodo cuando se hace click en el componente', () => { 

      render( <TodoItem 
               id={todo.id} 
               description={ todo.desc } 
               done={ todo.done } 
               onRemoveTodo={ onRemoveTodoMock} 
               onDone={onDoneMock}
               /> );

      const liElement = screen.getByRole('listitem');
      fireEvent.click( liElement );

      const spanElement = screen.getByLabelText('span');
      expect( spanElement.className).toBe('align-self-center text-decoration-line-through');
      
      expect( onDoneMock ).toHaveBeenCalledWith(todo.id);
   });
   
   test('El boton debe eliminar el componente cuando se hace click en el', () => { 

      render( <TodoItem 
               id={todo.id} 
               description={ todo.desc } 
               done={ todo.done } 
               onRemoveTodo={ onRemoveTodoMock} 
               onDone={onDoneMock}
      /> );

      // screen.debug();

      const buttonElement = screen.getByRole('button');
      fireEvent.click( buttonElement );


      expect( onRemoveTodoMock ).toBeCalledWith( todo.id );
      
   });

})