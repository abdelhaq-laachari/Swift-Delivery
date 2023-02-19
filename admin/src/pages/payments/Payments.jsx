import "./payments.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../getToken";

const Cars = () => {
  const token = localStorage.getItem("accessToken");
  const [data, setData] = useState([]);
  // get data from database using axios
  useEffect(() => {
    axios
      .get("admin/payments", config)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable data={data} title="All Payments" />
      </div>
    </div>
  );
};

export default Cars;
