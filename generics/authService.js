import * as sessionStore from "./sessionStore"
import jwt from "jsonwebtoken"
export default class AuthService {
  loggedIn = () => {
    let profile = sessionStore.getProfile()
    return Object.keys(profile).length === 0 ? false : true
  }

  logOut = () => {
    sessionStore.removeItem()
  }
}
