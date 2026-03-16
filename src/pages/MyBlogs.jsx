import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../services/axiosInstance";

const MyBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyBlogs = async () => {
            try {
                const res = await axiosInstance.get("/blogs/my-blogs");
                setBlogs(res.data.data || []);
            } catch (error) {
                console.error("Failed to fetch my blogs", error);
                toast.error(error.response?.data?.message || "Failed to fetch your blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchMyBlogs();
    }, []);

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-12">
                <p className="text-gray-600">Loading your blogs...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-semibold">My Blogs</h1>

                <Link
                    to="/create-blog"
                    className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800"
                >
                    Write new
                </Link>
            </div>

            {blogs.length === 0 ? (
                <p className="text-gray-600">
                    You haven’t written any blogs yet.
                </p>
            ) : (
                <div className="space-y-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="border-b pb-4 flex flex-col md:flex-row md:items-center md:justify-between"
                        >
                            <div>
                                <h2 className="text-lg font-medium">
                                    {blog.title}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    {blog.visibility ? "Public" : "Private"} ·{" "}
                                    {new Date(
                                        blog.createdAt
                                    ).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="flex gap-4 mt-3 md:mt-0 text-sm">
                                <Link
                                    to={`/edit-blog/${blog._id}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    Edit
                                </Link>

                                <button 
                                    onClick={async () => {
                                        if(window.confirm("Are you sure you want to delete this blog?")) {
                                            const deleteToast = toast.loading("Deleting...");
                                            try {
                                                await axiosInstance.delete(`/blogs/delete/${blog._id}`);
                                                setBlogs(blogs.filter(b => b._id !== blog._id));
                                                toast.success("Blog deleted successfully", { id: deleteToast });
                                            } catch (error) {
                                                toast.error("Failed to delete blog", { id: deleteToast });
                                            }
                                        }
                                    }}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBlogs;
