import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Header from './components/Header';
import ProductList from './modules/productList';
import './App.css';

function App() {
  return (<div>
    <Header />
    <ProductList />
  </div>);
}

export default App;
