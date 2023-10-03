import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-center gap-5">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Sing up</Link>
            <Link to='/heroRegister'>Hero Register</Link>
        </div>
    );
};

export default Header;