import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";

type mapStateToPropsForRedirectType={
    isAuth:boolean
}

let mapStateToPropsForRedirect = (state: RootStateType):mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<T>(Component:ComponentType<T>){

    function RedirectComponent(props: mapStateToPropsForRedirectType) {
        let {isAuth,...restProps}=props
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

return compose<ComponentType>(connect(mapStateToPropsForRedirect))(RedirectComponent);

}