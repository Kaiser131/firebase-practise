import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="gap-10">
            <NavLink className="btn btn-link" to='/'>Home</NavLink>
            <NavLink className="btn btn-link" to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;