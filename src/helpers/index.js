import md5 from "md5"

export const getCookie = () => {
  var existingCookie = localStorage.getItem("cookie")
  if (existingCookie) return existingCookie

  var random = Math.floor(Math.random() * 1000000000000000000000000)
  var encryptedCookie = md5(random)
  localStorage.setItem("cookie", encryptedCookie)
  return encryptedCookie
}
