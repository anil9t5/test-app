import Image from "next/image"

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
            <button type="button" className="btn btn-primary">
              &nbsp;Get Started&nbsp;
            </button>
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
          font-size: 72px;
        }
      `}</style>
    </div>
  )
}
export default Main
