import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <h4>this is product details</h4>
        </div>
    );
};

export default ProductDetails;