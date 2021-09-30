import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import AuthService from "../../generics/authService"
import LoginForm from "./LoginForm"
import * as sessionStore from "../../generics/sessionStore"

const Login = () => {
  const router = useRouter()
  const [user, setUser] = useState({ name: "", email: "" })
  const [error, setError] = useState("")
  const credentials = {
    email: "user@user.com",
    password: "user123",
  }
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()
  console.log(isLoggedIn)

  const login = (details) => {
    console.log(details)
    if (
      details.email == credentials.email &&
      details.password == credentials.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      })
      sessionStore.setProfile(details)
    } else {
      console.log("Credentials do not match!")
    }
  }

  const logout = () => {
    setUser({ name: "", email: "" })
  }
  return (
    <div>
      <LoginForm login={login} />
    </div>
  )
}

export default Login
