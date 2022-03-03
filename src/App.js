import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Header from './components/Header';
import ProductList from './modules/productList';
import ProductDetails from './modules/productDetails';
import './App.css';


// localhost:3000/product/1

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" exact component={ProductDetails} />
          {/* TODO: ADD CART ROUTE*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
