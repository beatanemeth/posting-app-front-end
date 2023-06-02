import { useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import * as userAPI from "../api/users"


const currentlyActiveLink = ({ isActive }) => {
    return (isActive ? "active" : undefined)
}


function Header() {
    const navigate = useNavigate();

    const { setUserInfo, userInfo } = useContext(UserContext);


    useEffect(() => {
        // to check if the user is logged in 
        userAPI.userProfile();
    }, [setUserInfo]);


    function logoutHandler() {
        // logout user
        userAPI.userLogout()

        setUserInfo(null);
        navigate("/");
    };


    const userEmail = userInfo?.email;


    return (
        <header className="header">
            <Link to="/">
                <div className="logo"
                >
                    Posting App
                </div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="blog"
                            className={currentlyActiveLink}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="search"
                            className={currentlyActiveLink}
                        >
                            Search
                        </NavLink>
                    </li>
                    {!userEmail && (
                        <li>
                            <NavLink
                                to="login"
                                className={currentlyActiveLink}
                            >
                                Login
                            </NavLink>
                        </li>
                    )}
                    {userEmail && (
                        <li>
                            <NavLink
                                to="blog/create"
                                className={currentlyActiveLink}
                            >
                                Create Post
                            </NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink
                            to="about"
                            className={currentlyActiveLink}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="contact"
                            className={currentlyActiveLink}
                        >
                            Contact
                        </NavLink>
                    </li>
                    {userEmail && (
                        <button onClick={logoutHandler}>
                            <NavLink
                                to="logout"
                                className={currentlyActiveLink}
                            >
                                Logout
                            </NavLink>
                        </button>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
