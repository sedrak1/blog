import React from "react";
import Header from "../Header/Header";
import LoginForm from "../Login form/LoginForm";
import PostCard from "../PostCard/PostCard";

export default class Login extends React.Component{
    render(){
        return (
            <div >
                <Header pageNumber={2}/>
                <LoginForm/>
            </div>
            
        )
    }
}