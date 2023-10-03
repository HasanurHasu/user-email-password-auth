import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const Login = () => {
    const [errorRegister, setErrorRegister] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(true);
    const emailRef = useRef(null)

    const handleRegister = e => {
        setRegisterSuccess('')
        setErrorRegister('')
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setErrorRegister('Password should be at least 6 characters ');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setErrorRegister('Your password should have at least one Uppercase characters')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setRegisterSuccess(result.user)
            })
            .catch(error => {
                setErrorRegister(error.message);
            })
    }
    const handleForgetPassword = () => {
        console.log('set reset email');
        const email = emailRef.current.value;
        if (!email) {
            setErrorRegister('Please provide a email')
            return
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorRegister('please provide a valid email')
            return;
        } else{
            sendPasswordResetEmail(auth, email);
        }
    }
    return (
        <div className="m-auto w-1/2 mt-8">
            <div className="w-3/4 m-auto">
                <h1 className="text-3xl font-semibold mb-4 text-center">Log In</h1>
                <form onSubmit={handleRegister}>
                    <input ref={emailRef} type="email" name="email" className=" border-2 rounded w-full mb-4 py-2 px-4" placeholder="Your Email Address" required id="" />
                    <br />
                    <div className="relative">
                        <input type={showPassword ? 'password' : 'text'} className=" border-2 rounded w-full py-2 px-4" placeholder="Enter Your Password" required name="password" id="" />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1/3 right-4 text-lg cursor-pointer">{showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>
                    <label className="label">
                        <a onClick={handleForgetPassword}  className="label-text-alt link link-hover">Forgot password?</a>
                    </label>

                    <input type="submit" className="btn btn-secondary mt-4  w-full text-lg text-white font-bold" value="Register" />
                </form>
                {
                    errorRegister && <p className="text-red-500 text-center">{errorRegister}</p>
                }
                {
                    registerSuccess && <p className="text-green-600 text-center">Your Registration is Successful</p>
                }
            </div>
        </div>
    );
};

export default Login;