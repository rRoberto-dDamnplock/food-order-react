import Nav from './Components/NavModal/Nav';


import './App.css';

import Img from './Components/Heading/Img';
import Card from './Components/Heading/Card/Card';
import Wrapper from './Components/foods/Wrapper';
import CartProvider from './Components/store/CartProvider';
import { useContext } from 'react';

function App() {
  // const ctx = useContext(Info)
  return (
<CartProvider>
    <Nav></Nav>
    <Img/>
    <Card/>
    <Wrapper/>
    </CartProvider>
  
  
  
  );
}

export default App;
