import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <article className="flex gap-4 p-6 glass rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-300 border border-gray-100/50 cursor-pointer group">
            {/* Text */}
            <div className="flex-1">
                <Link to={`/blog/${blog.slug}`} className="block">
                    <h2 className="text-2xl font-bold leading-snug group-hover:text-blue-600 transition-colors duration-200">
                        {blog.title}
                    </h2>
                </Link>

                {blog.subtitle && (
                    <p className="text-gray-600 mt-1 line-clamp-2">
                        {blog.subtitle}
                    </p>
                )}

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                    <span>{blog.author?.fullname}</span>
                    <span>·</span>
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
            </div>

            {/* Thumbnail */}
            {blog.thumbnail && (
                <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-24 h-24 object-cover rounded-md hidden sm:block"
                />
            )}
        </article>
    );
};

export default BlogCard;
