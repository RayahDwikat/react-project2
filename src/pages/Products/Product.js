import { useParams } from "react-router-dom";
import { IconButton } from "../../components/IconButton";
import product from "../../styles/product.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Gallary from "../Products/Gallary";
import ProductDetails from "./ProductDetails";

const Product = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error Fetching Data", error));

    }, [id]);
   
   
    return (

        <div className="product-page">
            <div className="detailsSection">
            <div className="arrow">
            <Link to="/react-project2"> 
              <IconButton iconName="arrow-back-outline" />
            </Link>
            </div>
        <div className="nav-link">
            <nav>
        {/* <Link to="#" className="productCategory"> {product.category}</Link> / <Link to="#" className="productTitle">{product.title}</Link> */}
        {product && (
      <>
        <span className="productCategory">{product.category}</span> /{' '}
        <span className="productTitle">{product.title}</span>
      </>
    )}
            </nav>
        </div>
        </div>
        
      <div className="sections">
        <ProductDetails product={product}/> 
        <Gallary id={id}/>
        </div>
         </div>
               
    );
}
export default Product;
