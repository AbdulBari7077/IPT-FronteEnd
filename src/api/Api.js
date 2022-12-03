
const BASE_URL = "https://localhost:44318"

export const LoginApi = async (userEmail, password) => {
    try {
        const response=await  axios.post(`${BASE_URL}/user/login`, {
            Email: userEmail,
            Password: password
        })
        return response;
        // if(response.status.code === 200) 
        // {
        //     // console.log(response);
           
        // }
        // throw(error)
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
        return response;
        // if(response.data?.code === 200)
        // {
        //     return true;
        // }
        // throw (response)
    }
    catch (err) {
        console.log(err);
        return err
    }
}
export const verifyEmail =async (uid,token)=>{
    try {
        // console.log(`Bearer ${token}`)
        const response =await axios.get(`${BASE_URL}/user/sendVerificationEmail?uid=${uid}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        return await response;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
export const checkVerification =async (uid,token)=>{
    try {
        const response =await axios.get(`${BASE_URL}/user/checkVerification?uid=${uid}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        return await response;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export const checkUserSubscribed =async (uid,token)=>{
    try {
        const response =await axios.get(`${BASE_URL}/user/getSubscription?uid=${uid}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        return await response;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
export const addSubscriptionPlan =async (uid,token,selectedPlan)=>{
    try {
        console.log(uid,token,selectedPlan)
        const response =await axios.get(`${BASE_URL}/user/AddSubscription?uid=${uid}&subscription=${selectedPlan}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        return response;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
export const getUserData =async (uid,token)=>{
    try {
        const response =await axios.get(`${BASE_URL}/user/Get?id=${uid}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        return await response;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
export const resetPassword =async (email,token)=>{
    try {
        const response =await axios.get(`${BASE_URL}/user/ResetPassword?email=${email}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        return await response;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export const EditProfile =async (data,token)=>{
    try {
        const response =await axios.put(`${BASE_URL}/user/update`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        },{
            data
        });
        return await response;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export const getRandomMovie =async ()=>{
    try {
        const response =await axios.get(`${BASE_URL}/Movie/getRandomMovie`,);
        return response;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}


export const getMovieById =async (id)=>{
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/Movie/getMovie/${id}`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
        console.log(response)
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const getMovies =async ()=>{
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/Movie/getMovies`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
        console.log(response)
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const getAllMovies = async () => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/Movie/getallMovies`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const getMovieByGenre = async (genre) => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/Movie/GetByGenre?genre=${genre}`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
