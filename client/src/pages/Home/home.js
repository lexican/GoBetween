import React from "react";
import Navbar from "../../common/Navbar/navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./index.scss";
import Search from "../../assets/icons/search.svg";
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <section className="banner">
        <h1>Book a business meeting</h1>
        <h1>with anyone.</h1>
        <div className="search">
          <Formik
            enableReinitialize={true}
            initialValues={{
              industry: "",
              price_range: "",
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // setSubmitting(true);
            }}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <div>
                  <div className="search-box">
                    <div className="d-flex align-items-center">
                      <div className="input-container">
                        <img src={Search} alt="Search icon" />
                        <Field
                          type="text"
                          className="form-control search-input"
                          placeholder="Search people, topics, and industries"
                          name="Search"
                        />
                      </div>
                      <button className="btn d-block">Search</button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Field
                      name="industry"
                      component="select"
                      placeholder="Industry"
                      className="form-select d-block"
                    >
                      <option value="">Industry</option>
                    </Field>
                    <ErrorMessage
                      name="nationality"
                      component="div"
                      className="form-error"
                    />
                  </div>
                  <div className="col-md-6">
                    <Field
                      name="price_range"
                      component="select"
                      placeholder="Price Range"
                      className="form-select d-block"
                    >
                      <option value="">Price Range</option>
                    </Field>
                    <ErrorMessage
                      name="price_range"
                      component="div"
                      className="form-error"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}
