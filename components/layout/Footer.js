import Script from "next/script"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-text">
                <span>Made with in Fredericton, Canada.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          background: #fbfcfe;
          bottom: 0;
          width: 100%;
          z-index: 1000;
          .footer-text {
            position: relative;
            text-align: center;
            padding: 15px;
          }
          :global(.icon-heart) {
            font-size: 18px;
            color: #f782ac;
          }
        }
      `}</style>
    </div>
  )
}

export default Footer
