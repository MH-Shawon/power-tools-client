import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Product from "./Product";
import '../../../assets/CSS/Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <div className="grid grid-cols-1 gap-10 px-20 pt-20 pb-6 lg:grid-cols-3">
                {products.slice(0, 9).map((product) => (
                    <Product key={product.name} product={product}></Product>
                ))}
            </div>
            <div className="px-20 text-center">
                <Link to={"/products"}>
                    <button className="px-10 text-black btn bg-[#FBC22B]">
                        All Products <FaArrowRight className="ml-3 text-black" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Products;