import { useLoaderData } from "react-router-dom";
import Product from "../Product";

const AllProducts = () => {
    const products = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 gap-10 px-20 pt-20 pb-6 bg-white lg:grid-cols-3">
                {products.map((product) => (
                    <Product key={product.name} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;