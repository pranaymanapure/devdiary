import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const { userData: user } = useSelector((state) => state.auth);
    const [profileOpen, setProfileOpen] = useState(false);

    const toggleProfile = () => {
        setProfileOpen(!profileOpen);
    };

    return (
        <header className="border-b border-gray-200 bg-white w-full">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-[22px] md:text-[26px] font-serif font-bold tracking-tight text-black"
                >
                    DEVDIARY
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <Link to="/" className="text-gray-700 hover:text-black">
                        Home
                    </Link>

                    {user && (
                        <Link
                            to="/my-blogs"
                            className="text-gray-700 hover:text-black"
                        >
                            My Blogs
                        </Link>
                    )}

                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="text-gray-700 hover:text-black"
                            >
                                Sign in
                            </Link>

                            <Link
                                to="/register"
                                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
                            >
                                Get started
                            </Link>
                        </>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={toggleProfile}
                                className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-medium"
                            >
                                {user.fullname?.charAt(0).toUpperCase()}
                            </button>

                            {profileOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md">
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        to="/my-blogs"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        My Blogs
                                    </Link>
                                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </nav>

                {/* MOBILE NAV (NO HAMBURGER) */}
                <nav className="flex md:hidden items-center gap-3 text-xs">
                    <Link to="/" className="text-gray-700 font-medium">
                        Home
                    </Link>

                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="text-gray-700 font-medium"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="bg-black text-white px-3 py-1 rounded-full text-xs"
                            >
                                Get started
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/my-blogs"
                                className="text-gray-700 font-medium"
                            >
                                My Blogs
                            </Link>

                            <button
                                onClick={toggleProfile}
                                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm"
                            >
                                {user.fullname?.charAt(0).toUpperCase()}
                            </button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
