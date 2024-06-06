import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const { data: isAdmin = [], isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      if (!user?.email) return false; // Return false if no user email is present
      const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`);
      console.log(res.data);
      return res?.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
