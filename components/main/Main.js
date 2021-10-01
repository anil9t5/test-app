import Router from "next/router"
import { useEffect, useState } from "react"
import AuthService from "../../generics/authService"
import Moment from "react-moment"
import moment from "moment"
import Image from "next/image"

const Main = () => {
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()
  const [dateToFormat, setdateToFormat] = useState(moment().toDate().getTime())
  const [timeOn, setTimeOn] = useState(true)

  const updateTime = () => {
    moment().format("DD-MM-YYYY")
  }

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/login")
    }

    if (timeOn) {
      let time = updateTime

      setdateToFormat(time)
    }
  }, [])

  const toggleTime = () => {
    setTimeOn(!timeOn)
  }
  return (
    <>
      {isLoggedIn && (
        <div className="d-flex flex-column align-items-center">
          <Image
            src="/images/41.svg"
            alt="Landing page image"
            width={380}
            height={380}
          />
          <h2
            className={
              timeOn
                ? "animate__animated animate__pulse animate__infinite	infinite"
                : ""
            }>
            <Moment interval={timeOn ? 1 : 0} unit="seconds">
              {dateToFormat}
            </Moment>
          </h2>
          <div className="btn-section">
            <button className="btn btn-primary" onClick={toggleTime}>
              {timeOn ? "Pause" : "Start"}
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        .btn-section {
          padding-top: 20px;
          .btn-primary {
            background-color: #656af6;
            color: #fff;
            padding: 10px 25px;
            border: 0px;
          }
        }
      `}</style>
    </>
  )
}

export default Main
