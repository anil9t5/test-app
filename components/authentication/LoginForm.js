import { useState } from "react"

const LoginForm = ({ login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" })

  const submitHandler = (e) => {
    e.preventDefault()
    login(details)
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h2 className="text-center mt-4">Please login</h2>
          <div className="form-section">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  aria-describedby="name"
                  placeholder="Name"
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                  value={details.name}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  aria-describedby="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>

      <style jsx>{`
        .form-section {
          margin-top: 60px;
          padding: 30px;
          border: 1px solid #e0e1e3;
          margin-bottom: 60px;
        }
        .btn-primary {
          background-color: #656af6;
          color: #fff;
          padding: 10px 25px;
          border: 0px;
        }
      `}</style>
    </>
  )
}

export default LoginForm
