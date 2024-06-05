import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Components/Loading";


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/signIn' replace />
};

export default PrivateRoute;