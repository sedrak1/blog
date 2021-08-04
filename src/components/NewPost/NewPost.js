import React from "react";
import CreatePostCard from "../CreatePostCard/CreatePostCard";
import Header from "../Header/Header";

export default class NewPost extends React.Component {
    render(){
        const {pageNumber = 1, posts} = this.props;
        return (
            <div>
                <Header tabName={localStorage.getItem("isLoggedIn") === "true" ?"Log out":"log in"} pageNumber={pageNumber}></Header>
                
                <CreatePostCard posts={posts}>
    
                </CreatePostCard>
            </div>
        );
    }
}
