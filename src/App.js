
import './App.css';
import Login from './component/login/login';
import Kitchen from './component/kitchen/kitchen';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from './component/Waiter/Cart';
import { CartProvider } from 'react-use-cart';
// import Itemcard from './component/waiter/Itemcard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Waiter from './component/Waiter/Waiter'
import Header from './component/Header/Header';
import Cashier from './component/Cashier/Cashier';
function App() {
  return (
    <CartProvider>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/waiter' element={<Waiter/>}/>
      <Route path='/kitchen' element={<Kitchen/>}/>
      <Route path='/cashier' element={<Cashier/>}/>
    </Routes>
    </BrowserRouter>
</CartProvider> 

      );
}

export default App;
