import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@material-ui/core";
import React from "react";
import Header from "../Header/Header";
import cn from "classnames";
import "./Home.css";

export default class Home extends React.Component {
    state = {
        posts: [],
    };
    handlePost() {
        return {};
    }

    centered = cn({
        flex: true,
        "justify-around": true,
        "text-center": true,
        "w-full": true,
        "mt-8": true,
    });
    input = cn({
        flex: true,
        "items-center": true,
        "w-full": true,
    });

    card = cn({
        block: true,
        "justify-center": true,
        "text-center": true,
        "w-full": true,
    });

    render() {
        return (
            <div>
                <Header
                    tabName={
                        localStorage.getItem("isLoggedIn") === "true"
                            ? "Log out"
                            : "log in"
                    }
                    pageNumber={0}
                />
                {this.state.posts.map((el) => {
                    <div>
                        <div className={this.centered}>
                            <Card>
                                <div className={this.card}>
                                    <CardActionArea>
                                        <div className={this.input}>
                                            <Avatar
                                                alt="User avatar"
                                                src="/static/images/avatar/1.jpg"
                                            />
                                            <h2>{el.userName}</h2>
                                        </div>
                                        <CardContent>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {el.postText}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </div>
                            </Card>
                        </div>
                    </div>;
                })}
            </div>
        );
    }
}
