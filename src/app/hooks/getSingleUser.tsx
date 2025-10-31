"use client";
import React, { useEffect, useState } from "react";
import { UserContextProvider } from "../context/UseContext";
import { axiosInstance } from "./axios";

function GetSingleUser() {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { selectedUser } = UserContextProvider();
  
  const getdata = async () => {
    const res = await axiosInstance.get(
      `/api/users/getSingleUser?id=${selectedUser}`
    );
    if (res.data) {
      setData(res.data.user);
    }
    setLoading(true);
  };
  useEffect(() => {
    if (selectedUser) {
      getdata();
    }
  }, [selectedUser]);

  return { data, loading };
}

export default GetSingleUser;
