import './App.css';
import CartList from './components/CartList';
import Login from './components/Login';
import Nav from './components/Nav';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import UserRedirect from './components/UserRedirect';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<CartList/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/product/:id' element={<UserRedirect />}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;