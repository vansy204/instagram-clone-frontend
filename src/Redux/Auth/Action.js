import { SIGN_IN, SIGN_UP } from "./ActionType";

export const signinAction = (data) => async (dispatch) => {
    try{
        const res = await fetch("http://localhost:5454/signin",
           { method:"GET",
            headers:{
                "Content-Type": "application/json",
                Authorization:"Basic " + btoa(data.email + ":" + data.password)
            }}
        )
        const token = res.headers.get("Authorization");
        localStorage.setItem("token",token);
        console.log("Signin token: ",token)
        dispatch({type:SIGN_IN,payload:token});
    }catch(error){
        console.log(error);
    }
}
export const signupAction = (data) => async (dispatch) => {
    try{
        const res = await fetch("http://localhost:5454/signup",
           { method:"POST",
            headers:{
                "Content-Type": "application/json",
            }}
        )
        const user = await res.json();
        console.log("Signup user: ",user)
        dispatch({type:SIGN_UP,payload:user});
    }catch(error){
        console.log(error);
    }
}