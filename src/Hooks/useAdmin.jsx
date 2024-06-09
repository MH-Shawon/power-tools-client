import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = () => {
  const { user } = useAuth();
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {setAdmin(data.role)
        setLoading(false)
      });
  }, [user?.email]);

  return [admin, loading];
};

export default useAdmin;
