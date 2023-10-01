import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-center gap-5">
            <Link to='/'>Home</Link>
            <Link to='/login'>Sing in</Link>
            <Link to='/register'>Sing up</Link>
        </div>
    );
};

export default Header;