import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";


const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [admin, adminLoading] = useAdmin();
  const location = useLocation();
  if (loading || adminLoading) {
    return <Loading />;
  }
  if (user && admin) {
    return children;
  }

  return <Navigate state={location.pathname} to="/" />;
};

export default AdminRoute;
