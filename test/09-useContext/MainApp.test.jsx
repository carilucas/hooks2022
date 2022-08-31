import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"


describe('Pruebas e <MainApp>', () => { 
   
   test('Debe mostrar el home', async () => { 
      
      render(
         <MemoryRouter>
            <MainApp />
         </MemoryRouter>
      )

      expect( screen.getByRole('heading', 'h1').innerHTML ).toContain('Home');

   });
   
   test('Debe mostrar el login', async () => { 
      
      render(
         <MemoryRouter initialEntries={ ['/login'] }>
            <MainApp />
         </MemoryRouter>
      )

      expect( screen.getByRole('heading', 'h1').innerHTML ).toContain('Login');

   });

})