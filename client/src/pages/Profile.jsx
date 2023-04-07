import React, { useState, useEffect } from "react";
import "../styles/profile-page.css";
import { TbEditCircle } from "react-icons/tb";
import axios from "axios";
import { config } from "../getToken";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const res = await axios.get("/driver/profile", config);
      setProfile(res.data);
    };
    getProfile();
  }, []);

  return (
    <>
      <div className="section_one">
        <h1 className="Head_title">Account Setting</h1>
        <div className="info_container">
          <span className="second_title">My Profile</span>
          {/* name and pic */}
          <div className="section2">
            <div className="left">
              <div className="picture_profile">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="name_title">
                <span className="name">{profile?.firstName} {profile?.lastName}</span>
                <span className="job_title">Driver</span>
                <span className="address">{profile?.city} {profile?.country} </span>
              </div>
            </div>
            <div className="right">
              <button className="edit_profile">
                <span>Edit</span>
                <TbEditCircle className="edit_icon" />
              </button>
            </div>
          </div>
          {/* Personal information */}
          <div className="section2">
            <div className="section2_left">
              <div className="s_name">
                <div className="first_name">
                  <span className="s_title">First Name</span>
                  <span className="s_subt">{profile?.firstName}</span>
                </div>
                <div className="first_name">
                  <span className="s_title">Email Address</span>
                  <span className="s_subt">{profile?.email}</span>
                </div>
              </div>
              <div className="s_email">
                <div className="first_name">
                  <span className="s_title">Last Name</span>
                  <span className="s_subt">{profile?.lastName}</span>
                </div>
                <div className="first_name">
                  <span className="s_title">Phone Number</span>
                  <span className="s_subt">{profile?.phone}</span>
                </div>
              </div>
            </div>
            <div className="right">
              <button className="edit_profile">
                <span>Edit</span>
                <TbEditCircle className="edit_icon" />
              </button>
            </div>
          </div>
          {/* Address */}
          <div className="section2">
            <div className="section2_left">
              <div className="s_name">
                <div className="first_name">
                  <span className="s_title">Country</span>
                  <span className="s_subt">{profile?.country}</span>
                </div>
                <div className="first_name">
                  <span className="s_title">Postal Code</span>
                  <span className="s_subt">{profile?.zipCode}</span>
                </div>
              </div>
              <div className="s_email">
                <div className="first_name">
                  <span className="s_title">Address</span>
                  <span className="s_subt">{profile?.address}</span>
                </div>
                <div className="first_name">
                  <span className="s_title">City</span>
                  <span className="s_subt">{profile?.city}</span>
                </div>
              </div>
            </div>
            <div className="right">
              <button className="edit_profile">
                <span>Edit</span>
                <TbEditCircle className="edit_icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
