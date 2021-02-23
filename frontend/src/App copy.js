import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ProductHomeScreen from './screens/ProductHomeScreen';
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
      <Route path="/products" component={ProductHomeScreen} exact></Route>
      <Route path="/purchases" component={Scan} exact></Route>
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
            <Link to="/objectives">My Objectives</Link>
            <Link to="/products">My Products</Link>
            <Link to="/purchases">My Purchases</Link>
            <Link to="/cart">
              My Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/budgetsheet">My Budget Sheet</Link>
            <Link to="/login">Login</Link>
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
