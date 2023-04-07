import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [formErrors, setFormErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunction = async (e) => {
    e.preventDefault();
    const errors = validate({
      email,
      password,
    });
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await axios.post("/driver/login", {
          email,
          password,
        });
        if (res.status === 200) {
          Cookies.set("token", res.data.token);
          console.log("User logged in successfully");
          window.location.href = "/profile";
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
    return errors;
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto">
              <form>
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
                  {
                    formErrors.email && (
                      <div className="invalid-feedback">{formErrors.email}</div>
                    )
                  }
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
                  {
                    formErrors.password && (
                      <div className="invalid-feedback">{formErrors.password}</div>
                    )
                  }
                </div>

                <button
                  type="button"
                  className="btn btn-danger btn-block mb-4"
                  onClick={loginFunction}
                >
                  Sign in
                </button>
              </form>
              <span className="gap-3">
                Don't have an account?
                <Link to="/register">Create an account</Link>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
