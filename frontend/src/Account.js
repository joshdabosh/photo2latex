import Cookies from "universal-cookie"

const cookies = new Cookies()

const getAuth = () => {
	return cookies.get("auth")
}

const setAuth = (d) => {
	cookies.set("auth", d)
}

const logout = () => {
	cookies.remove("auth")
}

export { getAuth, setAuth, logout }
