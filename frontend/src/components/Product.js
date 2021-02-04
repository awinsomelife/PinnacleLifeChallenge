import React from "react";

export default function product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <img className="medium" src={product.image} alt={product.name} />
    </div>
  );
}


