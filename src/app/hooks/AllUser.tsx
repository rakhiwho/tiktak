"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "./axios";
import { SocketContextProvider } from "../socketContext/socketContext";

export const Fetchdata = () => {
  const { SOCKET } = SocketContextProvider();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    try {
      const item = await axiosInstance.get(
        `/api/users/allUser`
      );
      setLoading(false);
      if (item.data.type) {
        setData(item.data.type);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetch();
  }, [SOCKET]);
  return { data, loading };
};
