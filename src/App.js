import './App.css';
import Header from "../src/layout/Header";
import Product from "./pages/Products/Product.js";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState , useEffect } from 'react';
import placeholderImage from '../src/Assets/placeholderImage.jpg';
import { CartProvider } from './hooks/CartContext.js';
import Cart from "../src/pages/cart/Cart.js";
import CartPage from './pages/cart/CartPage.js';
import CheckoutPage from "../src/pages/Checkout/CheckoutPage.js";
function App() {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching Products Data:', error));
}, []);  
  return (
    <CartProvider>
        <BrowserRouter>
        <Header products={products}/>
        <Routes>
        <Route path="/react-project2" element={<img src={placeholderImage} alt="Placeholder" style={{ width: "100%", height:"100%"}} />} />


      <Route path="react-project2/products/:id"  element={<Product products={products[0]}/>}/>
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/checkoutpage" element={<CheckoutPage/>} />


        </Routes>
    </BrowserRouter>




    </CartProvider>
   
     
  );
}

export default App;
