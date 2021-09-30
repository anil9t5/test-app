import Image from "next/image"
import Link from "next/link"

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h2 className="heading">Awesome Landing Page</h2>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="btn-section">
            <Link href="/main">
              <a className="btn btn-primary">Get Started</a>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <Image
            src="/images/13.svg"
            alt="Landing page image"
            width={800}
            height={800}
          />
        </div>
      </div>
      <style jsx>{`
        .heading {
          font-size: 65px;
        }
        .btn-section {
          .btn-primary {
            background-color: #656af6;
            color: #fff;
            padding: 10px 25px;
            border: 0px;
          }
        }
      `}</style>
    </div>
  )
}
export default Main