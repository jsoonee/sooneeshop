import React, { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';
import Footer from './components/Footer';
import Detail from './components/Detail';

import { data } from './components/data';

import './App.css';

import './css/Header.css';
import './css/Main.css';
import './css/Product.css';
import './css/Footer.css';

const App = () => {
  const [ products ] = useState(data);
  const [ addCart, setAddCart ] = useState(new Set());

  const addItem = item => {
    setAddCart(Array.from(new Set([...addCart, item])));
  }

  

  console.log(addCart);
  return (
    <div className="App">
        <Header cart={addCart}/>
        <Main/>
        <Product products={products} addItem={addItem}/>
        <Footer/>
        <Detail/>
    </div>
  );
}

export default App;