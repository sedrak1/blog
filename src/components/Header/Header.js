import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function Header({pageNumber}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(pageNumber);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab href="/" label="Home"></Tab>
                <Tab href="posts" label="New Post" />
                <Tab href="login" label="Log in" />
            </Tabs>
        </Paper>
    );
}
