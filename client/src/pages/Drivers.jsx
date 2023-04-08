import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import "../styles/drivers.css";
import axios from "axios";

const Drivers = () => {
  const [drivers, setDrivers] = React.useState([]);

  useEffect(async () => {
    const res = await axios.get("/driver/getAll");
    // console.log(res.data);
    setDrivers(res.data);
  }, []);
  console.log(drivers);
  return (
    <>
      <section className="ss">
        <div className="search_box">
          <div className="input-group">
            <div className="form-outline ">
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Search..."
              />
            </div>
            <button type="button" className="btn btn-primary">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        {drivers.map((driver, index) => {
          return (
            <div className="section2" key={index}>
              <div className="left">
                <div className="picture_profile">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt=""
                  />
                </div>
                <div className="name_title">
                  <span className="name">
                    {driver?.firstName} {driver?.lastName}
                  </span>
                  <span className="job_title">Driver</span>
                  <span className="address">
                    {driver?.address} {driver?.city} {driver?.country}
                  </span>
                  <span className="address">{driver?.phone}</span>
                </div>
              </div>
              <div className="right">
                <button className="edit_profile">
                  <span>Call</span>
                  <IoCallOutline className="edit_icon" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Drivers;
