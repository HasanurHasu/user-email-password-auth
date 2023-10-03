import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Register = () => {
    const [errorRegister, setErrorRegister] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(true);
    

    const handleRegister = e => {
        setRegisterSuccess('')
        setErrorRegister('')
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        if (password.length < 6) {
            setErrorRegister('Password should be at least 6 characters ');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setErrorRegister('Your password should have at least one Uppercase characters')
            return
        } else if(!terms){
            setErrorRegister('Accept our terms and conditions')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setRegisterSuccess(result.user)
            })
            .catch(error => {
                setErrorRegister(error.message);
            })
    }

   
    return (
        <div className="m-auto w-1/2 mt-8">
            <div className="w-3/4 m-auto">
                <h1 className="text-3xl font-semibold mb-4 text-center">Log In</h1>
                <form onSubmit={handleRegister}>
                    <input type="email"  name="email" className=" border-2 rounded w-full mb-4 py-2 px-4" placeholder="Your Email Address" required id="" />
                    <br />
                    <div className="relative">
                        <input type={showPassword ? 'password' : 'text'} className=" border-2 rounded w-full py-2 px-4" placeholder="Enter Your Password" required name="password" id="" />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1/3 right-4 text-lg cursor-pointer">{showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>
                    <div className="my-3">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept our <Link>Terms and Conditions</Link></label>
                    </div>

                    <input type="submit" className="btn btn-secondary mb-2  w-full text-lg text-white font-bold" value="Register" />
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

export default Register;