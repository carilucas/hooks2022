import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Pruebas en <HomePage>', () => { 
   
   test('Debe ostrar el componente sin el usuario', () => { 
      
      render( 
         <UserContext.Provider value={ {user:null} } >
            <HomePage />
         </UserContext.Provider>
      
      );
      const preTag = screen.getByLabelText('pre');
      expect( preTag.innerHTML ).toBe('null');
      // screen.debug();

   });
   
   test('Debe mostrar el componente con el usuario', () => { 

      const user = {
         id: 1,
         nombre:'Carlos',
         email:'c@c.com'
      }

      render( 
         <UserContext.Provider value={ { user } } >
            <HomePage />
         </UserContext.Provider>
      
      );
      const preTag = screen.getByLabelText('pre');

      expect( preTag.innerHTML ).toContain( user.nombre );
      expect( preTag.innerHTML ).toContain( `${user.id}` );

   })

})