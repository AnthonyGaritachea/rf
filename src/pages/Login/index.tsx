import React from 'react';
import { useLogin } from './useLogin';

const Login = () => {
    const { email, password, handleEmailChange, handlePasswordChange } = useLogin();

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => handleEmailChange(e)} />
                <label>Password</label>
                <input type="text" value={password} onChange={(e) => handlePasswordChange(e)} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;
