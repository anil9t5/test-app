import { Formik } from "formik"
import * as yup from "yup"
import React from "react"

const FormValidation = ({ login }) => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          login(values)
        }}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .max(15, "Must be 15 characters or less")
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
              <div className="form-section">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="bi bi-person-fill" />
                    </label>
                    <input
                      name="name"
                      type="text"
                      className={
                        errors.name && touched.name
                          ? "error"
                          : "form-control mb-3"
                      }
                      aria-describedby="name"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values["name"]}
                    />
                    {errors.name && touched.name && (
                      <div className="input-feedback">{errors.name}</div>
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
