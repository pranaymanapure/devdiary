import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axiosInstance from "../../services/axiosInstance";
import { login } from "../../redux/authSlice";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter email and password.");
            return;
        }

        setIsLoading(true);
        const loadingToast = toast.loading("Signing in...");

        try {
            const res = await axiosInstance.post("/users/login", { email, password });
            const userData = res.data.data;
            
            // Dispatch login action
            dispatch(login({ userData }));
            
            toast.success("Signed in successfully!", { id: loadingToast });
            navigate("/");
        } catch (error) {
            toast.error(error.response?.data?.message || "Invalid credentials.", { id: loadingToast });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <h1 className="text-2xl font-semibold mb-6 text-center">
                Welcome back
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 disabled:opacity-50"
                >
                    {isLoading ? "Signing in..." : "Sign in"}
                </button>
            </form>

            <p className="text-sm text-center text-gray-600 mt-6">
                Don’t have an account?{" "}
                <Link to="/register" className="text-black font-medium">
                    Create one
                </Link>
            </p>
        </>
    );
};

export default LoginForm;
