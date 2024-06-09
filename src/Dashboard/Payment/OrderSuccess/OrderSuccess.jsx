import { Link } from "react-router-dom";

const OrderSuccess = () => {
    return (
        <div>
            <div className="container py-10 mx-auto text-center">
                <h2 className='py-5 pt-16 mb-8 text-4xl font-semibold text-center'>Thanks for your order. We will deliver your product asap....!</h2>
                <Link to='/products'>
                    <button className='px-6 py-2 text-center text-white bg-red-500'>Explore More Product</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;