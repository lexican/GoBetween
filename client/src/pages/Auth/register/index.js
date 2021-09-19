import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../common/Navbar/navbar";
import "./index.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Facebook from "../../../assets/icons/facebook.svg";
import Google from "../../../assets/icons/google.svg";
import Twitter from "../../../assets/icons/twitter.svg";

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
});

export default function index() {
  return (
    <div className="register">
      <Navbar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 d-flex justify-content-center">
              <div className="content">
                <h1 className="mbr-section-title mbr-bold pb-1 display-6 text-center">
                  Create new ACCOUNT
                </h1>
                <p className="mbr-bold text-center">
                  Register as a seller? Submit Profile
                </p>
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    email: "",
                    password: "",
                    firstname: "",
                    lastname: "",
                    nationality: "",
                  }}
                  validationSchema={loginSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    // setSubmitting(true);
                  }}
                >
                  {({ isSubmitting, errors }) => (
                    <Form>
                      {errors.error && (
                        <p className="form-error">{errors.error}</p>
                      )}
                      <div className="col mb-3">
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="form-error"
                        />
                      </div>
                      <div className="col mb-3">
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="form-error"
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-sm-12 mb-3">
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Firstname"
                            name="firstname"
                          />
                          <ErrorMessage
                            name="firstname"
                            component="div"
                            className="form-error"
                          />
                        </div>
                        <div className="col-md-6 col-sm-12 mb-3">
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Lastname"
                            name="lastname"
                          />
                          <ErrorMessage
                            name="lastname"
                            component="div"
                            className="form-error"
                          />
                        </div>
                      </div>
                        <div className="col mb-3">
                          <Field
                            name="nationality"
                            component="select"
                            placeholder="Nationality"
                            className="form-select d-block"
                          >
                            <option value="">Nationality</option>
                          </Field>
                          <ErrorMessage
                            name="nationality"
                            component="div"
                            className="form-error"
                          />
                        </div>
                      <div className="row">
                        <div className="col-mb-2">
                          <button
                            type="submit"
                            className="btn d-block"
                            //disabled={isSubmitting}
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="my-4 text-center">OR</div>
                <h4 className="my-4 text-center">SIGN IN WITH</h4>
                <div className="group-button d-flex">
                  <button className="btn">
                    <img src={Facebook} alt="Facebook icon" className="mr-2" />
                    FACEBOOK
                  </button>
                  <button className="btn mx-2">
                    <img src={Google} alt="Google icon" />
                    Google
                  </button>
                  <button className="btn">
                    <img src={Twitter} alt="Twitter icon" />
                    TWITTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
