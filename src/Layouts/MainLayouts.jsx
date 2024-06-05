import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const MainLayouts = () => {
    return (
        <div>
            <div className="">
                <Navbar />
        </div>
        
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;