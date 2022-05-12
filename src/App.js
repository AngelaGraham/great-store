import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './App.css';
import {Outlet} from 'react-router-dom';
import Pruducts from './components/Products'

const App=()=> {

  const [allProducts, setAllProducts] =useState ([]);
  const getAllProducts=()=>{

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            // .then(json=>console.log(json))
           .then(json=>setAllProducts(json))
  };

    useEffect(()=>{
      getAllProducts()
      
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element ={<Home/>}/>
          <Route path="/products" exact element={<ProductList allProducts={allProducts}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
