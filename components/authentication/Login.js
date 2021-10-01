import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Router from "next/router"
import AuthService from "../../generics/authService"
import LoginForm from "./LoginForm"
import * as sessionStore from "../../generics/sessionStore"

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const credentials = {
    email: "user@user.com",
    password: "user123",
  }
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()

  useEffect(() => {
    setLoading(false)
    if (isLoggedIn) {
      Router.push("/main")
    }
  }, [])

  const login = (details) => {
    if (
      details.email.toLowerCase() == credentials.email &&
      details.password.toLowerCase() == credentials.password
    ) {
      sessionStore.setProfile(details)
      router.push("/main")
    } else {
      setError("Credentials do not match!")
    }
  }

  return (
    <>
      {loading ? (
        <div className="spinner-wrapper">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        !isLoggedIn && <LoginForm login={login} error={error} />
      )}
      <style jsx>{`
        .spinner-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </>
  )
}

export default Login
