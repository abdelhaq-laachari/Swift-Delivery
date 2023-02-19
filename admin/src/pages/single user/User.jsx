import React, { useEffect, useState } from "react";
import axios from "axios";
import Single from "../../components/single/Single";
import { config } from "../../getToken";

const User = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const id = localStorage.getItem("userId");
    const getUser = async (id) => {
      const res = await axios.get("/admin/singleClient/" + id, config);
      setData(res.data);
    };
    getUser(id);
  }, []);

  return (
    <>
      <Single data={data} />
    </>
  );
};

export default User;
