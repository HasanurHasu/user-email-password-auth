import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
    const [errorRegister, setErrorRegister] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')

    const handleRegister = e => {
        setRegisterSuccess('')
        setErrorRegister('')
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setErrorRegister('Password should be at least 6 characters ');
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
                    <input type="email" name="email" className=" border-2 rounded w-full mb-4 py-2 px-4" placeholder="Your Email Address" required id="" />
                    <br />
                    <input type="password" className=" border-2 rounded mb-4 w-full py-2 px-4" placeholder="Enter Your Password" required name="password" id="" />
                    <br />
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