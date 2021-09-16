import React from "react";
import Navbar from "../../../common/Navbar/navbar";
import "./login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function index() {
  return (
    <div className="login">
      <Navbar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 d-flex justify-content-center">
              <div className="content">
                <h1 className="mbr-section-title mbr-bold pb-1 display-6 text-center">
                  LOGIN ACCOUNT
                </h1>
                <p className="mbr-bold text-center">
                  If you have an account with us, please log in.
                </p>
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    username: "",
                    password: "",
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
                          name="username"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="form-error"
                        />
                      </div>
                      <div className="col mb-4">
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
                        <div className="col mb-2 d-flex justify-content-between">
                          <div className="form-check">
                            <Field
                              type="checkbox"
                              className="form-check-input"
                              name="isCheckedOut"
                            />
                            <label className="form-check-label f-14">
                              Keep me logged in
                            </label>
                          </div>
                          <div className="f-14">Forgot password?</div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-mb-2">
                          <button
                            type="submit"
                            className="btn d-block"
                            //disabled={isSubmitting}
                          >
                           LOG IN
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}