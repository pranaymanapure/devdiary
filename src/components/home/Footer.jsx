import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white mt-12">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">
                {/* Left */}
                <p className="text-center md:text-left">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-medium text-gray-800">DevDiary</span>.
                    Built while learning MERN.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-5 text-xl">
                    <a
                        href="https://github.com/PranayManapure"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-black transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/PranayManapure/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-black transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:pranaymanapure123@email.com"
                        className="hover:text-black transition"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
