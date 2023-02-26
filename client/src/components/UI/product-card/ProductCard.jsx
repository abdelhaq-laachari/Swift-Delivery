import React from "react";

import "../../../styles/product-card.css";

const ProductCard = (props) => {
  const { image01 } = props.item;

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
    </div>
  );
};

export default ProductCard;
