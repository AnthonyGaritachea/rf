import React from 'react';
import { useLogin } from './useLogin';

const Login = () => {
    const { email, password, handleEmailChange, handlePasswordChange } = useLogin();

    return (
        <div className="w-full h-screen">
            <div className="w-full h-screen flex flex-col justify-center items-center ">
                <h1>Login</h1>
                <form className="w-[50%] flex flex-col">
                    <label className="mb-1.5">Email</label>
                    <input
                        className="border-[1px] border-solid border-slate-300 rounded"
                        type="text"
                        value={email}
                        onChange={(e) => handleEmailChange(e)}
                    />
                    <label className="mt-5 mb-1.5">Password</label>
                    <input
                        className="border-[1px] border-solid border-slate-300 rounded"
                        type="text"
                        value={password}
                        onChange={(e) => handlePasswordChange(e)}
                    />
                    <div className="py-0.5 px-[18px] mt-[35px] mx-auto text-center bg-blue-500 text-white rounded">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
