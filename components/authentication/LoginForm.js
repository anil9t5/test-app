import { useState } from "react"
import Image from "next/image"
const LoginForm = ({ login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" })

  const submitHandler = (e) => {
    e.preventDefault()
    login(details)
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <Image
            src="/images/157.svg"
            alt="Landing page image"
            width={500}
            height={500}
          />
        </div>
        <div className="col-lg-1">
          <hr className="separator" />
        </div>
        <div className="col-lg-5">
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
      </div>

      <style jsx>{`
        .form-section {
          margin-top: 60px;
          margin-right: 30px;
          padding: 45px 35px;
          border: 1px solid #d0d1ff;
          border-radius: 8px;
          margin-bottom: 60px;
          .form-control {
            border: 1px solid #d0d1ff;
          }
        }
        .btn-primary {
          background-color: #656af6;
          color: #fff;
          padding: 10px 25px;
          border: 0px;
        }
        .separator {
          width: 1px;
          height: 500px;
          background: #656af6;
          background: -moz-linear-gradient(
            top,
            #f2f5f6 0%,
            #656af6 37%,
            #c8d7dc 100%
          );
          background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0%, #f2f5f6),
            color-stop(37%, #e3eaed),
            color-stop(100%, #c8d7dc)
          );
          background: -webkit-linear-gradient(
            top,
            #f2f5f6 0%,
            #656af6 37%,
            #c8d7dc 100%
          );
          background: -o-linear-gradient(
            top,
            #f2f5f6 0%,
            #656af6 37%,
            #c8d7dc 100%
          );
          background: -ms-linear-gradient(
            top,
            #f2f5f6 0%,
            #656af6 37%,
            #c8d7dc 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f5f6', endColorstr='#c8d7dc',GradientType=0 );
          background: linear-gradient(
            top,
            #f2f5f6 0%,
            #656af6 37%,
            #c8d7dc 100%
          );
        }
      `}</style>
    </>
  )
}

export default LoginForm
