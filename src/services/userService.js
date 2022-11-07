import axios from "axios";

export const loginApi= (loginObj)=> {
 let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",loginObj)
 console.log("login in process")
 return response
}
export const loGinApi = (loGinObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", loGinObj)
    console.log("signup is in processs")
    return response
}