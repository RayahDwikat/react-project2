
import { IconButton } from "../../components/IconButton";
import Gallary from "../../styles/Gallary.css"
import React, { useState, useEffect } from "react";

const Gallery = ({id}) => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => 
{
    const duplicatedImages = Array.from({ length: 5 }, () => data.image);
        setImages(duplicatedImages);

})      
.catch((error) => console.error("Error fetching images:", error));
  }, [id]);

  const handleThumbnailClick = (index) => {
    if (index !== selectedImageIndex) {
    setSelectedImageIndex(index);
    console.log(index);
    }
  };
  

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log("previous image");

  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    console.log("next image");
  };

  return (
  <div className="Gallary-container">
    <div className="image-number">
      <div className="image-info">
     <div className="num-design">0{selectedImageIndex + 1}</div><div className="num-details">/ 0{images.length}</div>

      </div>
  </div>
    <div className="product-gallery">
      <div className="main-image">
        <img src={images[selectedImageIndex]} alt={`Product ${id}`} />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={index === selectedImageIndex ? "active" : ""}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <div className="arrows" >
      <IconButton className="previousArrow" iconName="arrow-back-outline" onClick={handlePrevImage} color="black"/>
      <IconButton className="nextArrow" iconName="arrow-forward-outline" onClick={handleNextImage} color="black"/>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
