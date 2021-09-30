import Router from "next/router"
import { useEffect, useState } from "react"
import AuthService from "../../generics/authService"

const Main = () => {
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/login")
    }
  }, [])

  return (
    <>
      {isLoggedIn && (
        <div>
          <h2>Clock</h2>
        </div>
      )}
    </>
  )
}

export default Main
