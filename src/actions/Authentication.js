import axios from "axios"

export const Login = (username, password, callback) => {
    if (localStorage.token) {

    }

    this.getToken(username, password, (res) => {
        if (res.authenticated) {
            localStorage.token = res.token
            if (cb) cb(true)
        } else {
            if (cb) cb(false)
        }
    })
}


export const Logout = () => {
    delete localStorage.token
}

export const Loggedin = () => {
    return !!localStorage.token
}

export const getToken = (username, password, callback) => {
    axios.post("https://snshealthie.herokuapp.com/api/v2/authentication/", data, configs)
        .then((response) => {
            callback({
                authenticated: true,
                token: response.token,
            })
        })
        .catch((error) => {
            console.log(error.response)
        })


}