//                   // con screen podemos acceder al virtual DOM
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />); // crea un virtual DOM para el componente
//   const linkElement = screen.getByText(/learn react/i); // el texto screen.getByText encuentra un texto expecifico en el elemento
//   expect(linkElement).toBeInTheDocument(); // retorna casos de exito o fallos 

// });                    // nos ayuda a interectuar con elementos del DOM
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
  render(<App />);

  // encontrar un elemento con un rol de boton y texto Cambiar a azul
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // se espera que el fondo sea rojo
 expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  
  // Click the button
  fireEvent.click(colorButton);

  // se espera que el fondo sea azul
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // se espera que el texto del boton sea 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

// nota
/* 
  Si falla un test, el resto de los tests no se van a ejecutar.
  Siguiente Video: Click button to change color
*/

