import React from "react";
import NewPost from "../NewPost/NewPost";
export default class Main extends React.Component{
    state={
        posts:[]
    }
    render(){
        return(
            
            <div>
                <NewPost posts={this.state.posts}/>
            </div>
            
        )       
    }       
}