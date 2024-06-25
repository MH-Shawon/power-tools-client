import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";


const useOrder = () => {
    const { user } = useAuth();
    const { data: orders = [], refetch } = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async () => {
            const res = await axios.get(
                `https://power-tools-server-nine.vercel.app/orders?email=${user.email}`
            );
            return res.data;
        },
    });

    return [orders, refetch];
};

export default useOrder;