
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
        console.log(data,"DATA")
        const response =await axios.post(`${BASE_URL}/user/Update`,data,
        {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }
        );
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
export const addToFavlist = async (userId,movieId) => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/User/AddToFavorites?uid=${userId}&movie=${movieId}`, {
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
export const RemoveFromFavlist = async (userId,movieId) => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/User/RemoveFromFavorites?uid=${userId}&movie=${movieId}`, {
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
export const checkFavList = async (userId,movieId,userToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/User/checkisExist?uid=${userId}&movie=${movieId}`, {
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
export const getFavListMovies = async (favListIds) => {
    try {
        // console.log(favListIds,"getFavListMovies")
        const response = await axios.post(`${BASE_URL}/Movie/getFavMovies`,
        {
            favListIds
        })
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const addMovieToUserHistory = async (userId,movieId,userToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/User/addToHistory?uid=${userId}&movie=${movieId}`, {
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
export const getRecommendedMovies = async (userId,token) => {
    try {
        const response = await axios.get(`${BASE_URL}/User/getRecommendation?uid=${userId}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const updateRecommendationList = async (movieId,userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/Movie/Recommendation?id=${movieId}&uid=${userId}`)
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const updateMovieRating = async (movieId,rating) => {
    try {
        const response = await axios.get(`${BASE_URL}/Movie/UpdateRating?id=${movieId}&rating=${rating}`)
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
