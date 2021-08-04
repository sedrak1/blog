import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    TextField,
} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";

const useStyles = makeStyles({
    root: {
        width: 900,
    },
});

export default function CreatePostCard() {
    const [postText, setPostText] = useState("");
    const posts = [];
    const classes = useStyles();
    const centered = cn({
        flex: true,
        "justify-around": true,
        "text-center": true,
        "w-full": true,
        "mt-8": true,
    });
    const input = cn({
        flex: true,
        "items-center": true,
        "w-full": true,
    });

    const card = cn({
        block: true,
        "justify-center": true,
        "text-center": true,
        "w-full": true,
    });
    const handlePost = (arr, text) => {
        <div>{arr.map((el) => el.text)}</div>;
    };

    return (
        <div className={centered}>
            <Card className={classes.root}>
                <div className={card}>
                    <CardActionArea>
                        <div className={input}>
                            <Avatar
                                alt="User avatar"
                                src="/static/images/avatar/1.jpg"
                            />
                            <h2>{localStorage.getItem("userName")}</h2>
                        </div>
                    </CardActionArea>
                    <div class="flex">
                        <TextField
                            onChange={(e) => {
                                setPostText(e.target.value);
                            }}
                            multiline="true"
                            id="standard-primary"
                            label="whats on your mind"
                            color="primary"
                            fullWidth="true"
                        />
                        <Button
                            onClick={handlePost(posts, postText)}
                            variant="contained"
                            color="primary"
                        >
                            Post
                        </Button>
                    </div>
                </div>
            </Card>
            
        </div>
    );
}
