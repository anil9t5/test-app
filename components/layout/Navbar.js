/* eslint-disable @next/next/no-html-link-for-pages */
import ActiveLink from "./ActiveLink"
import Link from "next/link"
import Router from "next/router"
import { EntypoHome } from "react-entypo"
import AuthService from "../../generics/authService"

const Navbar = () => {
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()

  const onLogOut = () => {
    auth.logOut()
    Router.push("/login")
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-transparent navbar-custom">
        <div className="container">
          {isLoggedIn ? (
            <Link href="/main">
              <a>
                <h4>Test App</h4>
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a>
                <h4>Test App</h4>
              </a>
            </Link>
          )}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                {isLoggedIn ? (
                  <button className="btn btn-success" onClick={onLogOut}>
                    Log out
                  </button>
                ) : (
                  <ActiveLink href="/">
                    <EntypoHome />
                  </ActiveLink>
                )}
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
