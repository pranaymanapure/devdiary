import { useState } from "react";
import toast from "react-hot-toast";
import { slugify } from "../utils/slugify";
import axiosInstance from "../services/axiosInstance";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [visibility, setVisibility] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Auto-generate slug when title changes
    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
        setSlug(slugify(value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!title || !slug || !content || !thumbnail) {
            toast.error("Please fill all required fields and upload a thumbnail.");
            return;
        }

        setIsSubmitting(true);
        const loadingToast = toast.loading("Publishing your blog...");

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("subtitle", subtitle);
            formData.append("content", content);
            formData.append("slug", slug);
            formData.append("visibility", visibility);
            formData.append("thumbnail", thumbnail);

            await axiosInstance.post("/blogs/create", formData);
            toast.success("Blog published successfully!", { id: loadingToast });
            
            // Reset form
            setTitle("");
            setSlug("");
            setSubtitle("");
            setContent("");
            setThumbnail(null);
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to publish blog.", { id: loadingToast });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                className="w-full text-3xl font-semibold outline-none mb-4"
            />

            <input
                type="text"
                placeholder="Slug"
                value={slug}
                onChange={(e) => setSlug(slugify(e.target.value))}
                className="w-full text-sm text-gray-500 mb-6"
            />

            <input
                type="text"
                placeholder="Subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full mb-4"
            />

            <textarea
                placeholder="Write your content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-60 mb-4"
            />

            <input
                type="file"
                onChange={(e) => setThumbnail(e.target.files[0])}
                className="mb-4"
            />

            <label className="flex items-center gap-2 mb-4">
                <input
                    type="checkbox"
                    checked={visibility}
                    onChange={() => setVisibility(!visibility)}
                />
                Public
            </label>

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-black text-white px-6 py-2 rounded-full disabled:opacity-50"
            >
                {isSubmitting ? "Publishing..." : "Publish"}
            </button>
        </form>
    );
};

export default CreateBlog;
