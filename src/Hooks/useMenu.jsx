import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const useMenu = () => {
  const {
    data: menu = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axios.get("https://power-tools-server-nine.vercel.app/products");
      return res.data;
    },
  });
  return [menu, loading, refetch];
};
export default useMenu;
