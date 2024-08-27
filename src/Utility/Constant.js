
export let baseURL = "http://localhost:8000"
export let userSignupURL  =  `${baseURL}/users/signup`  //POST
export let userLoginURL  =  `${baseURL}/users/login`    //POST 
export let userGetURL = `${baseURL}/users`              //GET
export let userLogoutURL = `${baseURL}/users/logout`    //POST
export let userUpdateURL = `${baseURL}/users/update`    // PATCH 
export let userProfilePictureURL = `${baseURL}/users/updatePicture`  // PATCH 