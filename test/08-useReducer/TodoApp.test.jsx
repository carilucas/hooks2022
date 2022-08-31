import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos.js');


describe('Pruebas en <TodoApp>', () => { 

   const handleNewTodoMock = jest.fn();
   const handleRemoveTodoMock = jest.fn();
   const handleDoneMock = jest.fn();

   const useTodosMock = useTodos.mockReturnValue({
      todos:[
         {id:1,description:'hacer algo',done: false},
         {id:2,description:'hacer algo 2',done: true},
      ], 
      todosCount: 2, 
      pendingCount:1, 
      handleNewTodo: handleNewTodoMock, 
      handleRemoveTodo: handleRemoveTodoMock, 
      handleDone: handleDoneMock
   })
   
   test('Debe Mostrar el componente correctamente', () => { 
      
      render(<TodoApp />);

      // screen.debug()

      expect( screen.getByText('hacer algo')).toBeTruthy();
      expect( screen.getByText('hacer algo 2')).toBeTruthy();
      expect( screen.getByRole('textbox')).toBeTruthy();

    })

})