import { Outlet, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
// import Logo from "../components/Logo";

const AuthLayout = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative">
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black/20 z-40"></div>

            {/* Form Container */}
            <div className="relative z-50 w-full max-w-md bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close"
                >
                    <X size={20} className="text-gray-600" />
                </button>

                {/* Logo */}
                {/* <div className="flex justify-center mb-6">
                    <Logo />
                </div> */}

                {/* Auth Forms */}
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
