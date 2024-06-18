import React from "react";
import { Link } from "react-router-dom";


const Product = ({ product }) => {
  
  return (
    <div className=" products">
      <div className="img-info">
        <img className="w-full py-4 h-[300px]" src={product.img} alt="" />
        <div>
          {product.quantity == 0 ? (
            <p className="-m-3 font-bold text-center text-red-500 ">
              Product is out of stock
            </p>
          ) : <Link to={`/productDetails/${product._id}`}>
            <button className="btn bg-[#F2BB29]">purchase</button>
          </Link>}
        </div>
        
        
        
      </div>
      <div className="products-info">
        <p>{product.model}</p>
        <h2>{product.name}</h2>
        
      </div>
      
    </div>
  );
};

export default Product;
