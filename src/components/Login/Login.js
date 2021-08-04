import React from "react";
import Header from "../Header/Header";
import LoginForm from "../Login form/LoginForm";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            postValue: "",
            userName: "",
            password: "",
            id: 0,
            isLoggedIn: false,
        };
    }

    idGenerator = () => {
        this.setState((prevState) => {
            return { id: prevState.id + 1 };
        });
    };

    handleLogIn = () => {
        this.idGenerator();
        let newUser = {
            id: this.state.id,
            userName: this.state.userName,
            password: this.state.password,
            isLoggedIn: true,
        };
        this.setState((prevState) => {
            return {
                users: [...prevState.users, newUser],
            };
        });
        localStorage.setItem("isLoggedIn", newUser.isLoggedIn)
        console.log(this.state.users)
    };

    handleInputUserName = (e) => {
        this.setState(() => {
            let target = e.target.value;
            return { userName: target };
        });
        localStorage.setItem("userName", e.target.value)

    };
    handleInputPassword = (e) => {
        this.setState(() => {
            let target = e.target.value;
            return { password: target };
        });
    };

   

    render() {
        return (
            <div>
                <Header tabName={localStorage.getItem("isLoggedIn") === "true" ?"Log out":"log in"} pageNumber={2} />
                <LoginForm
                    handleInputUserName={this.handleInputUserName}
                    handleInputPassword={this.handleInputPassword}
                    handleLogIn={this.handleLogIn}
                    users={this.state.users}
                />
            </div>
        );
    }
}
