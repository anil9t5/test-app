/* eslint-disable @next/next/no-html-link-for-pages */
import ActiveLink from "./ActiveLink"
import Link from "next/link"
import { useRouter } from "next/router"
import Router from "next/router"
import { EntypoHome } from "react-entypo"
import AuthService from "../../generics/authService"
import "bootstrap-icons/font/bootstrap-icons.css"

const Navbar = () => {
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()
  const router = useRouter()

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
                <h4 className="logo">Test App</h4>
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a>
                <h4 className="logo">Test App</h4>
              </a>
            </Link>
          )}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                {isLoggedIn ? (
                  <span
                    className="btn-logout d-flex align-items-center"
                    onClick={onLogOut}>
                    <i className="bi bi-box-arrow-right"></i>&nbsp; Sign Out
                  </span>
                ) : router.pathname == "/" ? (
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
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
        .btn-logout {
          .bi-box-arrow-right {
            font-size: 22px;
          }
        }
        .logo:hover {
          color: #656af6;
        }
        .btn-logout:hover {
          cursor: pointer;
          color: #656af6;
        }
      `}</style>
    </header>
  )
}

export default Navbar
