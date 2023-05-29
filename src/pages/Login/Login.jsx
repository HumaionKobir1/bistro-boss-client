import { FaFacebook, FaGoogle, FaLock, FaMailBulk, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import Swal from 'sweetalert2'
import loginImg from '../../../src/assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const {logIn, GoogleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            Swal.fire({
                title: 'User Login Successful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, {replace: true})
        })
        .catch(error => console.log(error.message))
        
    }


    const handleGoogleLogin = () => {
        GoogleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);

            const saveUser = {name: loggedInUser.displayName,  email: loggedInUser.email};
                
                fetch("http://localhost:5000/users", {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })

                .then(res => res.json())
                .then(() => {
                    navigate(from, {replace: true})

                })

        })
        .catch(error => console.log(error))
    }


    useEffect(()=> {
        loadCaptchaEnginge(6); 
    }, [])


    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        } 
        else{
            setDisabled(true);
        }
    }

    return (
        <div className="login-bg md:pt-16 md:h-[100vh]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss || LogIn</title>
            </Helmet>
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
                            <FaMailBulk />
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
                            onBlur={handleValidateCaptcha} 
                            ref={captchaRef}
                            className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="captcha"
                            type="text"
                            name='captcha'
                            placeholder="type the captcha above"
                        />
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
                            <button onClick={handleGoogleLogin}><FaGoogle className='w-6 h-6'></FaGoogle></button>
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