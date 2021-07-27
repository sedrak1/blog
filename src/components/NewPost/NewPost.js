import React from "react";
import CreatePostCard from "../CreatePostCard/CreatePostCard";
import Header from "../Header/Header";

export default function Post({ pageNumber = 1 }) {
    return (
        <div>
            <Header pageNumber={pageNumber}></Header>
            
            <CreatePostCard>

            </CreatePostCard>
        </div>
    );
}
