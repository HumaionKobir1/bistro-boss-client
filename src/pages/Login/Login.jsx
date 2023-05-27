import { FaFacebook, FaGoogle, FaLock, FaTwitter, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Login.css'
import loginImg from '../../../src/assets/others/authentication1.png'

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        
    }

    return (
        <div className="login-bg md:h-[100vh]">
        <div className="login-subBg md:w-[70%] w-11/12 mx-auto md:py-0 md:pt-10 rounded-2xl py-7">
            <div data-aos="zoom-in-up" className="flex  shadow-2xl  flex-col md:flex-row gap-10 md:gap-3 w-full px-3 md:py-24 py-10 items-center justify-center ">
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