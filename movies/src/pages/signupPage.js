import React, {useContext, useState} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const SignupPage = props => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);

    const register = () => {
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegex.test(password);

        if(validPassword && password === passwordAgain) {
            context.register(userName, password);
            setRegistered(true);
        }
    };

    if(registered === true) {
        return <Navigate to="login" />;
    }

    return (
        <>
            <h2>Sign up page</h2>
            <p>You must register a username and password to log in</p>
            <input value={userName} placeholder="user name" onChange={e => {
                setUserName(e.target.value);
            }}></input><br />
            <input value={password} type="password" placeholder="password" onChange={e => {
                setPassword(e.target.value);
            }}></input><br />
            <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
                setPasswordAgain(e.target.value);
            }}></input><br />
            {/* Login web from */}
            <button onClick={register}>Register</button>
        </>
    );
};

export default SignupPage;