import React from "react";
import Header from "../Header/Header";
import PostCard from "../PostCard/PostCard";
import "./Home.css"

export default class Home extends React.Component{
    render(){
        return (
            <div >
                <Header pageNumber={0}/>
                <div className="card">
                    <PostCard/>
                </div>
            </div>   
        )
    }
}