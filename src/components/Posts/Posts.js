import React from "react";
import Header from "../Header/Header";
import PostCard from "../PostCard/PostCard";

export default function Post({ pageNumber = 1 }) {
    return (
        <div>
            <Header pageNumber={pageNumber}></Header>
            <PostCard />
        </div>
    );
}
