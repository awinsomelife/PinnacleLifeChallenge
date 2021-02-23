
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductHomeScreen from './screens/ProductHomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ScanScreen from './screens/ScanScreen';
import ObjectiveScreen from './screens/ObjectiveScreen'

import Navbar from './navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/products" component={ProductHomeScreen} exact></Route>
          <Route path="/purchases" component={ScanScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/objectives" component={ObjectiveScreen}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;