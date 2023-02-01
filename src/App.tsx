import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { Router } from "./Router";
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Router/>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  )
}
