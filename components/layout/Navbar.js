import ActiveLink from "./ActiveLink"
import { EntypoHome } from "react-entypo"
const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-transparent navbar-custom">
        <div className="container">
          <a className="navbar-brand font-weight-bold" href="/">
            <h4>Test App</h4>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                <ActiveLink href="/">
                  <EntypoHome />
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .heading {
          color: red;
        }
        .nav-item {
          padding: 10px 10px;
        }
      `}</style>
    </header>
  )
}

export default Navbar
