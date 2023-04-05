import React from "react";
import "../styles/profile-page.css";
import { TbEditCircle } from "react-icons/tb";

const Profile = () => {
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
                <span className="name">Rafiqu Rahman</span>
                <span className="job_title">Driver</span>
                <span className="address">Safi,Morocco</span>
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
                  <span className="s_subt">Rafique</span>
                </div>
                <div className="first_name">
                  <span className="s_title">Email Address</span>
                  <span className="s_subt">rohane@email.com</span>
                </div>
              </div>
              <div className="s_email">
                <div className="first_name">
                  <span className="s_title">Last Name</span>
                  <span className="s_subt">Rohane</span>
                </div>
                <div className="first_name">
                  <span className="s_title">Phone Number</span>
                  <span className="s_subt">+212 3456789</span>
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
                  <span className="s_subt">Morocco</span>
                </div>
                <div className="first_name">
                  <span className="s_title">Postal Code</span>
                  <span className="s_subt">46000</span>
                </div>
              </div>
              <div className="s_email">
                <div className="first_name">
                  <span className="s_title">Address</span>
                  <span className="s_subt">123, Azib derai</span>
                </div>
                <div className="first_name">
                  <span className="s_title">City</span>
                  <span className="s_subt">Safi</span>
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
