
const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="m-auto w-1/2">
            <h1 className="text-3xl font-semibold mb-4">Log In</h1>
            <form onSubmit={handleRegister}>
                <input type="email" name="email" className=" border-2 rounded mb-4 w-3/4 py-2 px-4" placeholder="Your Email Address" id="" />
                <br />
                <input type="password" className=" border-2 rounded mb-4 w-3/4 py-2 px-4" placeholder="Enter Your Password" name="password" id="" />
                <br />
                <input type="submit" className="btn btn-secondary w-3/4 text-lg text-white font-bold" value="Register" />
            </form>
        </div>
    );
};

export default Register;