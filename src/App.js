import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Header from './components/Header';
import ProductList from './modules/productList';
import ProductDetails from './modules/productDetails';
import './App.css';

// URLs
// localhost:3000/product/1
// localhost:3000/brand/1/product/12323
// localhost:3000/brand/:brandId/product/:productId

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          {/* <Route path="/product/:id" component={ProductDetails} /> */}
          <Route path="/brand/:brandId/product/:productId" component={ProductDetails} />
          {/* TODO: ADD CART ROUTE*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
