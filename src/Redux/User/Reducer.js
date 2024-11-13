import { REQ_USER } from "./ActionType"

const initialValue ={
    redUser: null,
}
export const UserReducer = (store=initialValue,{type,payload}) =>{
    if(type === REQ_USER){
        return {...store,reqUser:payload}
    }
    return store;
}