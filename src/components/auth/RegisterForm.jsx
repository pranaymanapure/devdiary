import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../../services/axiosInstance";

const RegisterForm = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!fullname || !email || !password) {
            toast.error("Full name, email, and password are required.");
            return;
        }

        const formData = new FormData();
        formData.append("fullname", fullname);
        formData.append("email", email);
        formData.append("password", password);
        if (avatar) {
            formData.append("avatar", avatar);
        }

        setIsLoading(true);
        const loadingToast = toast.loading("Creating your account...");
        
        try {
            await axiosInstance.post("/users/register", formData);
            toast.dismiss(loadingToast);
            toast.success("Account created successfully! Please login.");
            navigate("/login");
        } catch (error) {
            console.error("Registration Error:", error.response?.data);
            toast.dismiss(loadingToast);
            toast.error(error.response?.data?.message || "Registration failed.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <h1 className="text-2xl font-semibold mb-6 text-center">
                Create your account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Full name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />

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
                
                <div>
                    <label className="block text-sm text-gray-500 mb-1">Profile photo (optional)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setAvatar(e.target.files[0])}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-sm"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 disabled:opacity-50"
                >
                    {isLoading ? "Creating account..." : "Get started"}
                </button>
            </form>

            <p className="text-sm text-center text-gray-600 mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-black font-medium">
                    Sign in
                </Link>
            </p>
        </>
    );
};

export default RegisterForm;
