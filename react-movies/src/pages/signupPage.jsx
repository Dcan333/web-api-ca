import { useContext, useState } from "react";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router";

const SignupPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);

    const register = async () => {
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegEx.test(password);

        if (password.length > 0 && password === passwordAgain && validPassword) {
            const success = await context.register(userName, password);
            setRegistered(success);
        }
    };

    if (registered === true) {
        return (
            <>
                <h2>Registration Successful!</h2>
                <p>Thank you for registering... you can now <Link to="/login">login</Link>.</p>
            </>
        );
    }

    return (
        <>
            <h2>SignUp Page</h2>
            <p>You must register a username and password to log in </p>
            <input 
                value={userName} 
                placeholder="user name" 
                onChange={e => {
                    setUserName(e.target.value);
                }}
            />
            <br/>
            <input 
                value={password} 
                type="password" 
                placeholder="password" 
                onChange={e => {
                    setPassword(e.target.value);
                }}
            />
            <br/>
            <input 
                value={passwordAgain} 
                type="password" 
                placeholder="password again" 
                onChange={e => {
                    setPasswordAgain(e.target.value);
                }}
            />
            <br/>
            <button onClick={register}>Register</button>
            <p>Already Registered? <Link to="/login">Sign In</Link></p>
        </>
    );
};

export default SignupPage;