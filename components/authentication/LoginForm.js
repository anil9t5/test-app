import Image from "next/image"
import FormValidation from "./FormValidation"
const LoginForm = ({ login }) => {
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
          <h2 className="mt-4">Please login</h2>
          <div className="form-section">
            <FormValidation login={login} />
          </div>
        </div>
      </div>
      <style jsx>{`
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
