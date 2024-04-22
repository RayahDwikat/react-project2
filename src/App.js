import './App.css';
import Header from "../src/layout/Header";
import Product from "./pages/Products/Product.js";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/products/:id"  element={<Product/>}/>

        </Routes>
    </BrowserRouter>
  

    
    
 
  );
}

export default App;
