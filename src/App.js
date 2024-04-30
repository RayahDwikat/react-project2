import './App.css';
import Header from "../src/layout/Header";
import Product from "./pages/Products/Product.js";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState , useEffect } from 'react';
function App() {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching Products Data:', error));
}, []); 
 
  
  return (
    <BrowserRouter>
        <Header products={products}/>
        <Routes>
          <Route path="react-project2/products/:id"  element={<Product products={products[0]}/>}/>
      
        </Routes>
    </BrowserRouter>
  

    
    
 
  );
}

export default App;
