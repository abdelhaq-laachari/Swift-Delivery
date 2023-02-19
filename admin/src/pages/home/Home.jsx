import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../getToken";

const Home = () => {
  const [transactions, setTransactions] = useState();
  const [payment, setPayment] = useState();
  const [client, setClient] = useState();

  useEffect(() => {
    const totalClient = async () => {
      try {
        const res = await axios.get("admin/totalClients", config);
        setClient(res.data);
      }
      catch (error) {
        return error.response.data.message;
      }
    };

    totalClient();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={client} />
          <Widget type="transactions" amount={100} />
          <Widget type="payments" amount={100} />
          <Widget type="balance" amount="100" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
