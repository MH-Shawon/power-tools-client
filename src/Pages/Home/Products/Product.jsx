import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../../Components/Modal/Modal";

const Product = ({ product }) => {
  return (
    <div className="products">
      <div className="img-info">
        <img className="w-full py-4 h-[300px]" src={product.img} alt="" />
        {/* <Link to={`/productDetails/${product._id}`}>
          <button className="btn bg-[#F2BB29]">purchase</button>
        </Link> */}
        <Modal product={product} />
      </div>
      <div className="products-info">
        <p>{product.model}</p>
        <h2>{product.name}</h2>
      </div>
    </div>
  );
};

export default Product;
