import Script from "next/script"
import { EntypoHeart } from "react-entypo"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-text footer-text-on-mobile">
                <span>
                  Made with <EntypoHeart className="icon-heart" /> in
                  Fredericton, Canada.
                </span>
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
            position: fixed;
            bottom: 0px;
            text-align: center;
            padding: 10px;
          }
          :global(.icon-heart) {
            font-size: 20px;
            color: #ff6b6b;
          }
        }
      `}</style>
    </div>
  )
}

export default Footer
