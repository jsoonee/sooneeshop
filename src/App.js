import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';
import Footer from './components/Footer';

import './App.css';

import './css/Header.css';
import './css/Main.css';
import './css/Product.css';
import './css/Footer.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;