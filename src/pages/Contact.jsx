import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            {/* HERO */}
            <section className="mb-16">
                <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
                    Let’s talk
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
                    Whether it’s about a project, collaboration, or just a quick
                    conversation about development, I’m always open to connect.
                </p>
            </section>

            {/* CONTACT OPTIONS */}
            <section className="grid md:grid-cols-2 gap-16 mb-20">
                {/* Left */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Reach me here
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        The best way to reach me is through email or LinkedIn. I
                        usually respond within a reasonable time.
                    </p>

                    <div className="space-y-4 text-gray-800">
                        <a
                            href="mailto:pranaymanapure123@email.com"
                            className="flex items-center gap-3 hover:underline"
                        >
                            <FaEnvelope />
                            PranayManapure@email.com
                        </a>

                        <a
                            href="https://www.linkedin.com/in/PranayManapure/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 hover:underline"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/PranayManapure"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 hover:underline"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Right - Contact Form (Optional) */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Send a message
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                        />

                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your message"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
