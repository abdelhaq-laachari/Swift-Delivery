import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formErrors, setFormErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const registerFunction = async (e) => {
    e.preventDefault();
    const errors = validate({
      email,
      password,
      firstName,
      lastName,
      address,
      phone,
      city,
      country,
      zipCode,
    });
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await axios.post("/driver/register", {
          email,
          password,
          firstName,
          lastName,
          address,
          phone,
          city,
          country,
          zipCode,
        });
        if (res.status === 201) {
          console.log("User registered successfully");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    if (!values.zipCode) {
      errors.zipCode = "Zip code is required";
    }
    return errors;
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto">
              <form>
                <div className="d-flex justify-content-between row">
                  <div className="form-outline mb-4 col">
                    <label
                      className={
                        formErrors.firstName
                          ? "form-label text-danger"
                          : "form-label"
                      }
                      htmlFor="form2Example1"
                    >
                      First Name
                    </label>
                    <input
                      type="name"
                      className={
                        formErrors.firstName
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-outline mb-4 col">
                    <label
                      className={
                        formErrors.lastName
                          ? "form-label text-danger"
                          : "form-label"
                      }
                      htmlFor="form2Example1"
                    >
                      Last Name
                    </label>
                    <input
                      type="name"
                      className={
                        formErrors.lastName
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between row">
                  <div className="form-outline mb-4 col">
                    <label
                      className={
                        formErrors.email
                          ? "form-label text-danger"
                          : "form-label"
                      }
                      htmlFor="form2Example1"
                    >
                      Address
                    </label>
                    <input
                      type="address"
                      className={
                        formErrors.address
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-outline mb-4 col">
                    <label
                      className={
                        formErrors.phone
                          ? "form-label text-danger"
                          : "form-label"
                      }
                      htmlFor="form2Example1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className={
                        formErrors.phone
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between row">
                  <div className="form-outline mb-4 col">
                    <label
                      className={
                        formErrors.email
                          ? "form-label text-danger"
                          : "form-label"
                      }
                      htmlFor="form2Example1"
                    >
                      Country
                    </label>
                    <input
                      type="country"
                      className={
                        formErrors.country
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-outline mb-4 col">
                    <label
                      className={
                        formErrors.email
                          ? "form-label text-danger"
                          : "form-label"
                      }
                      htmlFor="form2Example1"
                    >
                      City
                    </label>
                    <input
                      type="city"
                      className={
                        formErrors.city
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-outline mb-4 col">
                    <label
                      className={
                        formErrors.email
                          ? "form-label text-danger"
                          : "form-label"
                      }
                      htmlFor="form2Example1"
                    >
                      Zip Code
                    </label>
                    <input
                      type="zipCode"
                      className={
                        formErrors.zipCode
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      onChange={(e) => {
                        setZipCode(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <label
                    className={
                      formErrors.email ? "form-label text-danger" : "form-label"
                    }
                    htmlFor="form2Example1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form2Example1"
                    className={
                      formErrors.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label
                    className={
                      formErrors.password
                        ? "form-label text-danger"
                        : "form-label"
                    }
                    htmlFor="form2Example2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="form2Example2"
                    className={
                      formErrors.password
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-danger btn-block mb-4"
                  onClick={registerFunction}
                >
                  Sign up
                </button>
              </form>
              <span>
                Already have an account?
                <Link to="/login">Login</Link>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
