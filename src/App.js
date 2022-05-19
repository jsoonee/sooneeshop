import React, { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Product from './components/product/Product';
import Footer from './components/Footer';

import { data } from './assets/data.json';

import './App.css';
import './css/Header.css';
import './css/Main.css';
import './css/Product.css';
import './css/Footer.css';

const App = () => {
  const [ products ] = useState(data);
  const [ addCart, setAddCart ] = useState([]);

  const addItem = item => {
    let existedItem = addCart.find(i => i.id === item.id);
    if (existedItem) {
      existedItem.quantity += 1;
      return (setAddCart([...addCart]));
    }
    else {
      item.quantity = 1;
      return (setAddCart([...addCart, item]));
    }
  }

  const onDecrease = (item) => {
    if (addCart.find(i => i.id === item).quantity === 1) {
      addCart.find(i => i.id === item).quantity = 1;
    } else {
      addCart.find(i => i.id === item).quantity -= 1;
    }
    return (setAddCart([...addCart]));
  }

  const onIncrease = (item) => {
    addCart.find(i => i.id === item).quantity += 1;
    return (setAddCart([...addCart]));
  }

  const onRemove = (remove) =>
    setAddCart(prev => prev.filter(({ id }) => id !== remove));

  return (
    <div className="App">
        <Header cart={addCart} onDecrease={onDecrease} onIncrease={onIncrease} onRemove={onRemove}/>
        <Main/>
        <Product products={products} addItem={addItem}/>
        <Footer/>
    </div>
  );
}

export default App;