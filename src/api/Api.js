
const BASE_URL = "http://backend:3980"
export const LoginApi = (userEmail, password) => {
    try {
        console.log(userEmail, password);
        axios.post(`${BASE_URL}/login`, {
            userEmail: userEmail,
            password: password
        })
            .then(function (response) {
                console.log(response);
                return true;
            })
            .catch(function (error) {
                throw(error)
            });
    }
    catch (err) {
        console.log(err);
        return false
    }
}

export const SignUpApi = (userName, userEmail, password) => {
    try {
        console.log(userName,userEmail, password);
        axios.post(`${BASE_URL}/register`, {
            userName:userName,
            userEmail: userEmail,
            password: password
        })
            .then(function (response) {
                console.log(response);
                return true;
            })
            .catch(function (error) {
                throw(error)
            });
    }
    catch (err) {
        console.log(err);
        return false
    }
}