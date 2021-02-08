import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Scan from './container/Scan';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  let routes = (
    <Switch>
    <Route path="/cart/:id?" component={CartScreen}></Route>
    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/" component={Scan} exact></Route>
    <Route path='/purchases' component={HomeScreen}> </Route>
    </Switch>
    )
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
          <Link className="brand" to="/">
              Pinnacle Life Challenge
          </Link>
          
          </div>
          <div>
            <a href="/objectives">My Objectives</a>
            <a href="/products">My Products</a>
            <a href="/purchases">My Purchases</a>
            <a href="/budgetsheet">My Budget Sheet</a>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          {routes}
        
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
