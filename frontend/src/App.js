import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Pinnacle Life Challenge
          </a>
          </div>
          <div>
            <a href="/objectives">My Objectives</a>
            <a href="/products">My Products</a>
            <a href="/purchases">My Purchases</a>
            <a href="/cart">My Cart</a>
            <a href="/budgetsheet">My Budget Sheet</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
