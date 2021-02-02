import React from "react";
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "./firebase"
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [{}, dispatch ] = useStateValue()

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })

        .catch(error => alert(error.message))      

    }

    return (
        <div className="login">
            <div className="login__container">
                <img alt="" src="https://i.pinimg.com/564x/1f/0a/7c/1f0a7cd394abb65aa8088f59be819466.jpg"/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>sign in with Google</Button>

            </div>
        </div>
    )
}

export default Login