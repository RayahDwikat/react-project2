import React, { useEffect, useState , useRef } from "react";
import '../styles/headerStyle.css';
import { IconButton } from "../components/IconButton";
import ProductsMenu from "../components/ProductsMenu";
import { Link } from "react-router-dom";
export default function Header(){

  const[isMenuOpen , setIsMenuOpen] = useState(false);
  const[menuData , setMenuData] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = (event) => {
    if (event.target.closest (".header") === null) {
      setIsMenuOpen(false);
    }
  }
  
  useEffect(()=>{
    if(isMenuOpen){
      fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data =>{
        setMenuData(data);
      })
      .catch(error=>{
        console.error('Error fetching Menu Data:', error);
      });

    }
  }, [isMenuOpen]);
  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

    return(
        <div className="header"> 
         <Link className="home-link" component={Link} to="/react-project2">
           <div className="logo">
            <h2>Cozy®</h2>
           </div>
           </Link>
           <div className="pages" >
            <h4>SHOP</h4>
            <h4>COLLECTIVE</h4>
            <h4>DESIGNERS</h4>
            <h4>ABOUT US</h4>
            <h4>CONTACT</h4>
           </div>
          
           <div className="icons">
           <IconButton
            iconName="menu-outline" onClick={toggleMenu}
            />
            {isMenuOpen && <ProductsMenu isOpen={isMenuOpen} menuData={menuData} />}
            <IconButton
              iconName="search-outline" 
            />
            <div className="divider"></div>
            <IconButton 
            iconName ="cart-outline"/>
          </div>
       </div>
   
   
    );

}
