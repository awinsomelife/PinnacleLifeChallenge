import React from "react";
import { Link } from 'react-router-dom';

export default function product(props) {
  const { product } = props;
  
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
      <img className="medium" src={product.image} alt={product.name} />
      </Link>
    </div>
  );
}



