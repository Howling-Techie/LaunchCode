import {
    FaLaptopCode,
    FaMobileAlt,
    FaServer,
    FaCloud,
    FaDatabase,
    FaSyncAlt,
    FaTwitter,
    FaEnvelope,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

function App() {
    return (
        <div
            className="min-h-screen bg-gradient-to-r from-[#00224D] to-[#000825] text-white flex flex-col items-center font-sans">
            <header className="w-full py-4 flex justify-center items-center bg-[#FF204E] shadow-lg">
                <div className="flex flex-col md:flex-row justify-center">
                    <img className="object-contain max-h-24 md:max-h-32"
                         src="/assets/LAUNCH.png"
                         alt="Launch"/><img
                    className="object-contain max-h-24 md:max-h-32"
                    src="/assets/CODE.png" alt="Code"/>
                </div>
            </header>

            <main className="w-full max-w-6xl flex flex-col items-center px-6 py-10">
                <section className="w-full mb-16 text-center relative">
                    <h2 className="text-4xl font-bold text-[#FF204E] mb-6">About Me</h2>
                    <div
                        className="relative mx-auto max-w-4xl bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] opacity-10 rounded-lg pointer-events-none"></div>
                        <p className="text-lg leading-relaxed">
                            Welcome to LaunchCode! I am a passionate full stack web developer dedicated to bringing your
                            digital dreams to life. My expertise spans a wide range of technologies, allowing me to
                            create stunning websites and applications that perform seamlessly on both desktop and mobile
                            devices.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Whether you need a simple static website or a complex project with robust backend systems,
                            I've got you covered. My services include:
                        </p>
                        <ul className="mt-4 list-disc list-inside text-left space-y-2 group">
                            <li className="transition duration-500 transform hover:translate-x-2 group-hover:opacity-50 hover:!opacity-100">Building
                                responsive and interactive web applications.
                            </li>
                            <li className="transition duration-500 transform hover:translate-x-2 group-hover:opacity-50 hover:!opacity-100">Developing
                                mobile applications that work seamlessly on various devices.
                            </li>
                            <li className="transition duration-500 transform hover:translate-x-2 group-hover:opacity-50 hover:!opacity-100">Creating
                                advanced web projects with backend integration.
                            </li>
                            <li className="transition duration-500 transform hover:translate-x-2 group-hover:opacity-50 hover:!opacity-100">Offering
                                hosting services for the completed sites, including domain name acquisition.
                            </li>
                            <li className="transition duration-500 transform hover:translate-x-2 group-hover:opacity-50 hover:!opacity-100">Providing
                                regular updates and database management as needed.
                            </li>
                        </ul>
                        <p className="mt-4 text-lg leading-relaxed">
                            I pride myself on delivering high-quality, visually appealing, and user-friendly digital
                            solutions that cater to your unique business needs. Browse through my portfolio below to see
                            examples of my work.
                        </p>
                    </div>
                </section>
                <section className="w-full mb-16 relative">
                    <h2 className="text-4xl font-bold text-[#FF204E] mb-6 text-center">Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaLaptopCode,
                                title: "Web Development",
                                description: "Creating responsive and interactive websites."
                            },
                            {
                                icon: FaMobileAlt,
                                title: "Mobile Development",
                                description: "Building mobile applications for various devices."
                            },
                            {
                                icon: FaServer,
                                title: "Backend Integration",
                                description: "Implementing robust backend systems."
                            },
                            {
                                icon: FaCloud,
                                title: "Hosting Services",
                                description: "Offering hosting and domain name services."
                            },
                            {
                                icon: FaDatabase,
                                title: "Database Management",
                                description: "Providing regular updates and database management."
                            },
                            {
                                icon: FaSyncAlt,
                                title: "Maintenance",
                                description: "Ensuring your site remains up-to-date and secure."
                            },
                        ].map((service, index) => (
                            <div key={index}
                                 className="group service-item bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl duration-750 transition transform hover:scale-105 flex flex-col items-center relative overflow-hidden"
                                 role="button" aria-label={service.title}>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out overflow-hidden z-10">
                                    <div
                                        className="absolute z-10 flex flex-col items-center text-white duration-500 ease-in-out translate-x-full group-hover:translate-x-0 py-6 px-6 w-full">
                                        <service.icon className="text-6xl mb-4 transition"/>
                                        <h3 className="text-center text-2xl font-semibold mb-2 transition">{service.title}</h3>
                                        <p className="text-center transition">{service.description}</p>
                                    </div>
                                </div>
                                <div
                                    className="relative flex flex-col items-center text-black w-full">
                                    <service.icon className="text-[#FF204E] text-6xl mb-4" aria-hidden="true"/>
                                    <h3 className="text-center text-2xl font-semibold mb-2 bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] bg-clip-text text-transparent">{service.title}</h3>
                                    <p className="text-center">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="w-full mb-16 relative">
                    <h2 className="text-4xl font-bold text-[#FF204E] mb-6 text-center">Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Portfolio Item 1 */}
                        <div
                            className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
                            <img src="path/to/image1.jpg" alt="Project 1"
                                 className="w-full h-64 object-cover mb-4 rounded-lg"/>
                            <h3 className="text-2xl font-semibold mb-2">Project Title 1</h3>
                            <p className="flex-grow mb-4">Short description of the project goes here. This project
                                showcases advanced web development skills and a keen eye for design.</p>
                            <a href="https://github.com/yourgithub/project1"
                               className="text-[#FF204E] font-semibold underline">View on GitHub</a>
                        </div>

                        {/* Portfolio Item 2 */}
                        <div
                            className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
                            <img src="path/to/image2.jpg" alt="Project 2"
                                 className="w-full h-64 object-cover mb-4 rounded-lg"/>
                            <h3 className="text-2xl font-semibold mb-2">Project Title 2</h3>
                            <p className="flex-grow mb-4">Short description of the project goes here. This project
                                highlights mobile app development capabilities and backend integration.</p>
                            <a href="https://github.com/yourgithub/project2"
                               className="text-[#FF204E] font-semibold underline">View on GitHub</a>
                        </div>

                        {/* Add more portfolio items as needed */}
                    </div>
                </section>
                <section className="w-full mb-16 relative">
                    <h2 className="text-4xl font-bold text-[#FF204E] mb-6 text-center">Contact</h2>
                    <div
                        className="flex flex-wrap justify-center gap-8 p-8 bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] rounded-lg shadow-2xl">
                        {[
                            {icon: FaTwitter, title: "Twitter", url: "https://twitter.com/yourusername"},
                            {icon: FaEnvelope, title: "Email", url: "mailto:yourname@example.com"},
                            {icon: FaGithub, title: "GitHub", url: "https://github.com/yourgithub"},
                            {icon: FaLinkedin, title: "LinkedIn", url: "https://linkedin.com/in/yourlinkedin"},
                        ].map((contact, index) => (
                            <a key={index} href={contact.url} target="_blank" rel="noopener noreferrer"
                               className="group contact-item bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-inner transform transition duration-500 flex flex-col items-center w-48 h-auto hover:bg-[#00224D] hover:text-white"
                               role="button" aria-label={`Contact via ${contact.title}`}>
                                <contact.icon
                                    className="text-6xl mb-4 text-[#FF204E] group-hover:text-white transition duration-500"/>
                                <h3 className="text-2xl font-semibold mb-2 transition duration-500 bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] bg-clip-text text-transparent group-hover:text-white">{contact.title}</h3>
                            </a>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="w-full py-10 flex justify-center bg-[#FF204E] shadow-lg">
                <p>© 2024 LaunchCode. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App
