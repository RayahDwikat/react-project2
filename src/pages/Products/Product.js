// import { useParams } from "react-router-dom";
// import { IconButton } from "../../components/IconButton";
// import product from "../../styles/product.css";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// const Product = ({id}) => {
//     const [product, setProduct] = useState(null);
//     const params = useParams();

//     useEffect(() => {
//         fetch(`https://fakestoreapi.com/product?id=${params.id}`)
//             .then((response) => response.json())
//             .then((data) => setProduct(data))
//             .catch((error) => console.error("Error Fetching Data", error));

//     }, [id]);


//     return (
//         <div className="product-page">
//             <div className="arrow">
//                 <IconButton iconName="arrow-back-outline" />
//             </div>
//             <div>
//             {product && (
//                 <div key={product.id}>
//                     <div className="uppertitle">
//                         <p>{product.category}</p>
//                         /
//                         <p>{product.title}</p>
//                     </div>
//                 </div>
//             )}
//             </div>

//         </div>
//     );
// }
// export default Product;
import React, { useState, useEffect } from 'react';
import ProductImages from './ProductImages';
import DetailsThumb from './DetailsThumb';
import ProductDetails from './ProductDetails';

const Product = ({id}) => {
  const [product, setProduct] = useState(null);
  const [index, setIndex] = useState(0);
  const myRef = React.createRef();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`) 
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  return (
    <div className="product-page">
      {product && (
        <>
          <ProductImages images={product.src} />
          <div className="product-details-container">
            <ProductDetails product={product} />
            <DetailsThumb images={product.src} tab={handleTab} myRef={myRef} />
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
