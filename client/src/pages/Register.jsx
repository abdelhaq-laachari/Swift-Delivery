import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { email, password, firstName, lastName } = formData;

  const registerFunction = (e) => {
    e.preventDefault();
    try {
      const res = axios.post("/user/register", {
        email,
        password,
        firstName,
        lastName,
      });
      if (res.status === 200) {
        console.log("User registered successfully");
      }
    } catch (error) {
      console.log(error);
    }
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
                    <label className="form-label " htmlFor="form2Example1">
                      First Name
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      onChange={(e) => {
                        setFormData({ ...formData, firstName: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-outline mb-4 col">
                    <label className="form-label " htmlFor="form2Example1">
                      Last Name
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      onChange={(e) => {
                        setFormData({ ...formData, lastName: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
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
