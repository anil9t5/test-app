import { Formik } from "formik"
import * as yup from "yup"
import React from "react"

const FormValidation = ({ login, error }) => {
  return (
    <>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          login(values)
        }}
        validationSchema={yup.object().shape({
          firstname: yup
            .string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          lastname: yup
            .string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          email: yup.string().email().required("Required"),
          password: yup
            .string()
            .required("Required")
            .min(6, "Password is too short - should be 6 characters minimum")
            .matches(/(?=.*[0-9])/, "Password must contain a number"),
        })}>
        {(props) => {
          const {
            values,
            handleChange,
            errors,
            touched,
            isSubmitting,
            handleBlur,
            handleSubmit,
          } = props
          return (
            <div>
              <div className="form-section form-section-on-mobile">
                {error ? <span className="input-feedback">{error}</span> : ""}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="firstname">
                      <i className="bi bi-person-fill" />
                    </label>
                    <input
                      name="firstname"
                      type="text"
                      className={
                        errors.firstname && touched.lastname
                          ? "error"
                          : "form-control mb-3"
                      }
                      aria-describedby="firstname"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values["firstname"]}
                    />
                    {errors.firstname && touched.firstname && (
                      <div className="input-feedback">{errors.firstname}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname">
                      <i className="bi bi-person-fill" />
                    </label>
                    <input
                      name="lastname"
                      type="text"
                      className={
                        errors.lastname && touched.lastname
                          ? "error"
                          : "form-control mb-3"
                      }
                      aria-describedby="lastname"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values["lastname"]}
                    />
                    {errors.lastname && touched.lastname && (
                      <div className="input-feedback">{errors.lastname}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="bi bi-envelope-fill" />
                    </label>
                    <input
                      name="email"
                      type="text"
                      className={
                        errors.email && touched.email
                          ? "error"
                          : "form-control mb-3"
                      }
                      aria-describedby="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values["email"]}
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="bi bi-key-fill" />
                    </label>
                    <input
                      name="password"
                      type="password"
                      className={
                        errors.password && touched.password
                          ? "error"
                          : "form-control mb-3"
                      }
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values["password"]}
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )
        }}
      </Formik>
      <style jsx>{`
        .form-group {
          position: relative;
          label {
            position: absolute;
            left: 16px;
            top: 15px;
          }
        }
        .form-section {
          margin-top: 60px;
          margin-right: 30px;
          padding: 45px 35px;
          border: 1px solid #d0d1ff;
          border-radius: 8px;
          margin-bottom: 60px;
          .form-control {
            border: 1px solid #d0d1ff;
            height: 50px;
            padding-left: 45px;
          }
        }
        .btn-primary {
          background-color: #656af6;
          color: #fff;
          padding: 10px 25px;
          border: 0px;
        }

        .error {
          border: 1px solid #ff6b6b;
          height: 50px;
          border-radius: 0.25rem;
          width: 100%;
          padding-left: 45px;
        }
        .input-feedback {
          color: #ff6b6b;
          font-size: 14px;
          padding: 5px;
        }
      `}</style>
    </>
  )
}

export default FormValidation
