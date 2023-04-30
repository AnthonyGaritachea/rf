import React from 'react';
import { useLogin } from './useLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    const { email, password, handleEmailChange, handlePasswordChange, handleSubmit } = useLogin();

    return (
        <div className="w-full h-screen">
            <div className="w-full h-screen flex flex-col justify-center items-center ">
                <h1>Login</h1>
                <form className="w-[50%] flex flex-col" onSubmit={handleSubmit}>
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
                        type="password"
                        value={password}
                        onChange={(e) => handlePasswordChange(e)}
                    />
                    <div className="text-center">
                        <button className="py-0.5 px-[18px] mt-[35px] mx-auto bg-blue-500 text-white rounded">
                            Submit
                        </button>
                        <p className="mt-5 text-base">
                            Don't have an Account?{' '}
                            <Link to="/register">
                                <span className="underline">Register</span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
