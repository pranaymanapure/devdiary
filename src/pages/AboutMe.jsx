const AboutMe = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            {/* HERO SECTION */}
            <section className="mb-20">
                <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
                    Hey, I’m Pranay
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
                    A Java developer exploring full-stack development, building
                    real products, and learning by doing — one project at a
                    time.
                </p>
            </section>

            {/* ABOUT STORY */}
            <section className="grid md:grid-cols-2 gap-16 mb-20">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Where I come from
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        I started my career working primarily with Java and
                        backend systems. Designing APIs, handling databases, and
                        understanding application flow has always been my strong
                        side. I enjoy building things that are structured,
                        reliable, and easy to maintain.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Over time, I realized that understanding only one side
                        of an application wasn’t enough. I wanted to see how
                        everything connects — from the backend logic to the
                        interface users interact with.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        What I’m building now
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="font-medium text-gray-900">
                            DevDiary
                        </span>{" "}
                        is my personal full-stack blog project built with the
                        MERN stack. It’s a space where I apply what I’ve learned
                        by building a complete product — authentication, APIs,
                        state management, routing, and UI structure.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        The goal isn’t to build something flashy. It’s to build
                        something real, understand the trade-offs, and improve
                        the code with every iteration.
                    </p>
                </div>
            </section>

            {/* TECH & MINDSET */}
            <section className="max-w-4xl">
                <h2 className="text-2xl font-semibold mb-4">
                    How I like to work
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                    I prefer clean project structures, readable code, and
                    practical solutions over unnecessary complexity. Recently,
                    I’ve been working with React, Redux, Vite, and Tailwind CSS
                    on the frontend, while continuing to strengthen my backend
                    skills with Java, Spring Boot, and Node.js.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    I believe the best way to learn is by building, breaking,
                    fixing, and repeating. DevDiary is a reflection of that
                    mindset — steady progress, honest learning, and real
                    development experience.
                </p>
            </section>
        </div>
    );
};

export default AboutMe;
