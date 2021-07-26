import Home from "../components/Home/Home";
import Posts from "../components/Posts/Posts";
import Login from "../components/Login/Login";

export const Routes = {
    home: () => ({ url: "/", text: "Home", component: Home }),
    countryPage: () => ({
        url: "/Posts/",
        text: "Posts",
        component: Posts,
    }),
    login: () => ({ url: "/login", text: "Login", component: Login }),
};