import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../components/blog/BlogCard";
import axiosInstance from "../services/axiosInstance";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Fetch with pagination parameters (e.g., page 1, 10 limits setup on BE by default)
                const res = await axiosInstance.get(`/blogs`);
                // Adapt to the new backend pagination signature
                setBlogs(res.data.data.blogs || []);
                // setTotalPages(res.data.data.totalPages || 1);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Framer Motion constraints and variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* HERO – ALWAYS VISIBLE */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-center md:text-left"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    DevDiary
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
                    Thoughts, learnings, and experiences around development,
                    written and shared openly.
                </p>
            </motion.div>

            {/* CONTENT AREA */}
            {loading && (
                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-200 h-32 rounded-xl w-full"></div>
                    ))}
                </div>
            )}

            {!loading && blogs.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">No blogs published yet.</p>
                </div>
            )}

            {!loading && blogs.length > 0 && (
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="space-y-8"
                >
                    {blogs.map((blog) => (
                        <motion.div key={blog._id} variants={itemVariants}>
                            <BlogCard blog={blog} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Home;
