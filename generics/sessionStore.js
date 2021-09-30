import Cookies from "js-cookie"

export function setProfile(profile) {
  Cookies.set("user", JSON.stringify(profile))
}

export function getProfile() {
  const profile = Cookies.get("user")
  return profile ? JSON.parse(profile) : {}
}

export function removeItem() {
  Cookies.remove("user")
}
