import { FaFacebook, FaGoogle, FaLock, FaTwitter, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Login.css'
import loginImg from '../../../src/assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        
    }


    useEffect(()=> {
        loadCaptchaEnginge(6); 
    }, [])


    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        } 
        else{
            setDisabled(true);
        }
    }

    return (
        <div className="login-bg md:pt-16 md:h-[100vh]">
        <div className="login-subBg md:w-[70%] w-11/12 mx-auto ">
            <div data-aos="zoom-in-up" className="flex  shadow-2xl  flex-col md:flex-row gap-10 md:gap-3 w-full px-3 pt-10 py-5 items-center justify-center ">
                <div className="w-full   px-4 grid items-center justify-center">
                    <img
                    className=""
                    src={loginImg}
                    alt="Logo"
                    />
                </div>
                <div className="w-full  items-center justify-center">
                    <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Login</h2>
                    <form onSubmit={handleLogin} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                        </label>

                        <div className="flex items-center">
                        <span className="absolute  pl-3">
                            <FaUser />
                        </span>
                        <input
                            className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="email"
                            name='email' 
                            placeholder="Enter your email"
                        />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                        </label>
                        
                        <div className="flex items-center">
                        <span className="absolute pl-3">
                            <FaLock />
                        </span>
                        <input
                            className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                        />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="captcha" className="block text-gray-700 font-bold mb-2">
                            <LoadCanvasTemplate />
                        </label>
                        
                        <div className="flex items-center">
                        <span className="absolute pl-3">
                            <FaLock />
                        </span>
                        <input
                            ref={captchaRef}
                            className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="captcha"
                            type="text"
                            name='captcha'
                            placeholder="type the captcha above"
                        />
                        <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs ml-1">Click for Validate</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="remember" className="flex items-center">
                        <input
                            className="mr-2 leading-tight"
                            id="remember"
                            type="checkbox"
                        />
                        <span className="text-sm text-gray-700">Remember me</span>
                        </label>
                    </div>
                    <div className='text-center mt-2 mb-4'>
                        <p className='text-lg font-medium text-red-900'>{''}</p>
                    </div>
                    <div>
                        <button
                        disabled={disabled}
                        className="bg-[#D1A054] hover:bg-[#e5a648] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                        >
                        Login
                        </button>
                        <p className="mt-3 text-center text-[#D1A054]">New here? <Link className=' underline font-medium text-center' to='/signUp'><span>Create an account</span></Link>
</p>
                    </div>
                    <div className=''>
                        <p className="my-3 text-center">Or sign in with</p>
                        <div className='flex gap-5 justify-center'>
                            <button><FaFacebook className='w-6 h-6'></FaFacebook></button>
                            <button onClick={''}><FaGoogle className='w-6 h-6'></FaGoogle></button>
                            <button><FaTwitter className='w-6 h-6'></FaTwitter></button>
                        </div>
                    </div>
                    </form>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;