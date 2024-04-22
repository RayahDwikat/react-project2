import menuStyle from "../styles/menuStyle.css";
import React, { useRef } from "react";
const ProductsMenu = ({ isOpen, menuData }) => {
    if (!menuData) {
        return null;
    }
    return (
        <div className="menu" >
            {menuData &&
                (
                    <ul>
                        {menuData.map((item) => (
                            <div className="items">
                            <li key={item.id} className="menu-item">
                               <div className="menu-img">
                                <div className="image-box">
                                    <img src={item.image} alt="ProductImage"/>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="menu-category">{item.category}</div>
                                    <div className="menu-title">{item.title}</div>
                                </div>
                            </li>
                            </div>
                        ))}
                    </ul>
                )}
        </div>
    )
}
export default ProductsMenu;