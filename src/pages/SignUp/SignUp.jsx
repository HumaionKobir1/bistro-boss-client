import { FaFacebook, FaGoogle, FaLock, FaMailBulk, FaPhotoVideo, FaTwitter, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../../src/assets/others/authentication1.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const SignUp = () => {
    const {createUser, updateUserProfile, GoogleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();



    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUserProfile(name, photo)
            .then(()=> {
                console.log('user profile info update')
                Swal.fire({
                    title: 'User Create Successful',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error.message))

    }

    const handleGoogleLogin = () => {
        GoogleSignIn()
        .then(result => {
            console.log(result);
            navigate('/')
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="login-bg md:pt-16 md:h-[100vh]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss || SignUp</title>
            </Helmet>
        <div className="login-subBg md:w-[70%] w-11/12 mx-auto ">
            <div data-aos="zoom-in-up" className="flex  shadow-2xl  flex-col md:flex-row-reverse gap-10 md:gap-3 w-full px-3 pt-10 py-5 items-center justify-center ">
                <div className="w-full   px-4 grid items-center justify-center">
                    <img
                    className=""
                    src={loginImg}
                    alt="Logo"
                    />
                </div>
                <div className="w-full grid items-center md:ml-28 ml-4">
                    <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Sign Up</h2>
                    <form onSubmit={handleSignUp} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                        </label>

                        <div className="flex items-center">
                        <span className="absolute  pl-3">
                            <FaUser />
                        </span>
                        <input
                            className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name='userName' 
                            placeholder="Enter your name"
                        />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="Photo" className="block text-gray-700 font-bold mb-2">
                        Photo
                        </label>

                        <div className="flex items-center">
                        <span className="absolute  pl-3">
                            <FaPhotoVideo />
                        </span>
                        <input
                            className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photo"
                            type="text"
                            name='photo' 
                            placeholder="Enter your photoUrl"
                        />
                        </div>
                    </div>

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
                        SignUp
                        </button>
                        <p className="mt-3 text-center text-[#D1A054]">Already have an account? <Link className=' underline font-medium text-center' to='/login'><span>Login</span></Link>
</p>
                    </div>
                    <div className=''>
                        <p className="my-3 text-center">Or sign Up with</p>
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

export default SignUp;