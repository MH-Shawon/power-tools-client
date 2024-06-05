import Banner from "./Banner";
import Counter from "./Counter";
import Discount from "./Discount";
import Features from "./Feature";
import Info from "./Info";
import Products from "./Products/Products";
import Review from "./Review";
import Service from "./Service";


const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <Info />
            <Discount />
            <Products />
            <Features />
            <Counter />
            <Review />
        </div>
    );
};

export default Home;