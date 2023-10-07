import { Link, NavLink } from "react-router-dom";
import UserDefaultPicture from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const NavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <img src={UserDefaultPicture} alt="" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {NavLinks}

                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={UserDefaultPicture} />
                    </div>
                </label>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Login</button>
                        :
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default Navbar;