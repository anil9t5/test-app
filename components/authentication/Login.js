import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import AuthService from "../../generics/authService"
import LoginForm from "./LoginForm"
import * as sessionStore from "../../generics/sessionStore"

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  const credentials = {
    email: "user@user.com",
    password: "user123",
  }
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()

  useEffect(() => {
    setLoading(false)
  }, [])

  const login = (details) => {
    if (
      details.email == credentials.email &&
      details.password == credentials.password
    ) {
      sessionStore.setProfile(details)
      router.push("/main")
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
        <LoginForm login={login} />
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
