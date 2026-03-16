import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../services/axiosInstance";
import { login } from "../redux/authSlice";

function ProfilePage() {
    const { userData: user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);

    if (!user) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-20">
                <p className="text-gray-600">
                    Please log in to view your profile.
                </p>
            </div>
        );
    }

    const handleAvatarChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const loadingToast = toast.loading("Updating avatar...");

        try {
            const formData = new FormData();
            formData.append("avatar", file);

            const res = await axiosInstance.put("/users/update-avatar", formData);
            const updatedUser = res.data.data;

            // Update Redux state with new avatar
            dispatch(login({ userData: updatedUser }));
            toast.success("Avatar updated!", { id: loadingToast });
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update avatar.", { id: loadingToast });
        } finally {
            setUploading(false);
            // Reset file input
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const handleRemoveAvatar = async () => {
        if (!user.avatar) return;
        if (!window.confirm("Remove your profile picture?")) return;

        const loadingToast = toast.loading("Removing avatar...");

        try {
            const res = await axiosInstance.put("/users/update-details", {
                fullname: user.fullname,
                email: user.email,
            });

            // Clear avatar in Redux — set it to empty
            dispatch(login({ userData: { ...user, avatar: "" } }));
            toast.success("Avatar removed.", { id: loadingToast });
        } catch (error) {
            toast.error("Failed to remove avatar.", { id: loadingToast });
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            {/* HERO */}
            <section className="mb-20">
                <div className="flex items-center gap-6">
                    {/* Avatar */}
                    <div className="relative group">
                        <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-3xl font-semibold overflow-hidden ring-2 ring-gray-200">
                            {user.avatar ? (
                                <img src={user.avatar} alt={user.fullname} className="w-full h-full object-cover" />
                            ) : (
                                user.fullname?.charAt(0).toUpperCase()
                            )}
                        </div>

                        {/* Hover overlay */}
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            disabled={uploading}
                            className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="hidden"
                        />
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                            {user.fullname}
                        </h1>
                        <p className="text-gray-600 mt-1">
                            {user.email}
                        </p>
                    </div>
                </div>

                {/* Avatar actions */}
                <div className="flex gap-3 mt-4 ml-26">
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="text-sm text-blue-600 hover:underline disabled:opacity-50"
                    >
                        {uploading ? "Uploading..." : "Change photo"}
                    </button>

                    {user.avatar && (
                        <button
                            onClick={handleRemoveAvatar}
                            className="text-sm text-red-500 hover:underline"
                        >
                            Remove photo
                        </button>
                    )}
                </div>
            </section>

            {/* CONTENT */}
            <section className="grid md:grid-cols-2 gap-16 mb-20">
                {/* Left */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">About</h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        This is your DevDiary profile. It reflects your identity
                        as a developer and the work you publish here. Your blogs
                        capture your thoughts, learnings, and progress over
                        time.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Use this space to write consistently, refine your ideas,
                        and build a personal archive of your development
                        journey.
                    </p>
                </div>

                {/* Right */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        Profile details
                    </h2>

                    <div className="space-y-3 text-gray-700">
                        <div>
                            <span className="font-medium text-gray-900">
                                Email:
                            </span>{" "}
                            {user.email}
                        </div>

                        <div>
                            <span className="font-medium text-gray-900">
                                Member since:
                            </span>{" "}
                            {new Date(user.createdAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </section>

            {/* ACTIONS */}
            <section className="flex flex-wrap gap-4">
                <Link
                    to="/my-blogs"
                    className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                >
                    My Blogs
                </Link>

                <Link
                    to="/create-blog"
                    className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition"
                >
                    Write a Blog
                </Link>
            </section>
        </div>
    );
}

export default ProfilePage;
