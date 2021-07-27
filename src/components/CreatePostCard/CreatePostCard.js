import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    CardContent,
    TextField,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";

const useStyles = makeStyles({
    root: {
        // maxWidth: 900,
        // minWidth:700,
        width: 900,
    },
});

export default function CreatePostCard() {
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
                            <h2>User Name</h2>
                        </div>
                    </CardActionArea>
                    <div class="flex">
                        <TextField
                            id="standard-primary"
                            label="whats on your mind"
                            color="primary"
                            fullWidth="true"
                        />
                        <Button variant="contained" color="primary">
                            Post
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
