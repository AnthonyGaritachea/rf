import React from 'react';
import { useRegister } from './useRegister';

const Register = () => {
    const { email, password, handleEmailChange, handlePasswordChange, handleSubmit } = useRegister();

    return (
        <div className="w-full h-screen">
            <div className="w-full h-screen flex flex-col justify-center items-center ">
                <h1>Register</h1>
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

export default Register;
