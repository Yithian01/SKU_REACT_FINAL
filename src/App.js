import './App.css';
import CartList from './components/CartList';
import Counter from './components/Counter';
import Nav from './components/Nav';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
       <Nav/>
       <ProductList/>
       <CartList />
        {/* <Counter/> */}
    </div>
  );
}

export default App;
