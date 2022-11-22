
const BASE_URL = "https://localhost:44318"

export const LoginApi = async (userEmail, password) => {
    try {
        const response=await  axios.post(`${BASE_URL}/user/login`, {
            Email: userEmail,
            Password: password
        })
        if(response.status === 200) 
        {
            // console.log(response);
            return response;
        }
        throw(error)
    }
    catch (err) {
        console.log(err);
        return false
    }
}

export const SignUpApi = async (userName, userEmail, password) => {
    try {
        const response =await axios.post(`${BASE_URL}/user/Register`, {
            Name:userName,
            Email: userEmail,
            Password: password
        })
        if(response.status === 200)
        {
            // console.log(response);
            return response;
        }
        throw (error)
    }
    catch (err) {
        console.log(err);
        return false
    }
}