import React from "react";
import Navbar from './navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductHomeScreen from './screens/ProductHomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Scan from './container/Scan';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/products" component={ProductHomeScreen} exact></Route>
          <Route path="/purchases" component={Scan} exact></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;