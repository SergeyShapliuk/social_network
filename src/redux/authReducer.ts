import {ActionsType} from "./store";
import {Dispatch} from "@reduxjs/toolkit";
import {authApi} from "../api/Api";


const SET_AUTH_DATA="SET_AUTH_DATA"


let initialState={
    userId:null,
    email:null,
    login:null,
    isAuth:false

};
type initialStateType=typeof initialState

const authReducer=(state:initialStateType=initialState,action:ActionsType):initialStateType=>{
    switch (action.type) {
        case "SET_AUTH_DATA":
            return {
                ...state,
                ...action.payload

            }
        default:
            return state
    }
}


export const setAuthData=(userId:null,email:null,login:null,isAuth:boolean)=>({type:SET_AUTH_DATA,payload:{userId,email,login,isAuth}}) as const

export const getAuthUserData=()=>(dispatch:Dispatch)=>{

    authApi.getMyProfile().then(data => {
        console.log(data)
        if (data.resultCode === 0) {
            dispatch(setAuthData(data.data.id,data.data.email,data.data.login,true));
        }
    })
};
export const loginProfile=(email:string,password:string,rememberMe:boolean)=>(dispatch:Dispatch)=>{

    authApi.login(email,password,rememberMe).then(data=>{
        console.log('login',data)
        if(data.resultCode === 0){
           dispatch<any>(getAuthUserData())
        }
    })
}
export const logoutProfile=()=>(dispatch:Dispatch)=>{
    authApi.logout().then(data=>{
        if(data.resultCode === 0){
           dispatch(setAuthData(null,null,null,false))
        }
    })
}
export default authReducer;





