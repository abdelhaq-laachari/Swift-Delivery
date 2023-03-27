import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
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
                  <label className="form-label" for="form2Example1">
                    Email address
                  </label>
                  <input type="email" id="form2Example1" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                  />
                </div>

                <button type="button" className="btn btn-danger btn-block mb-4">
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
