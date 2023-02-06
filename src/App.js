import './App.css';
import CartList from './components/CartList';
import Login from './components/Login';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import UserRedirect from './components/UserRedirect';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
       <Routes>
          <Route path='/' element={<ProductList />}/>
          <Route path='/cart' element={<CartList />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/product/:id' element={<UserRedirect />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;