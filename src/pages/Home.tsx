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
import {ServiceItem} from "../components/ServiceItem.tsx";
import {useEffect, useState} from "react";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from "@dnd-kit/core";
import {
    arrayMove, rectSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import {VscRocket} from "react-icons/vsc";

export default function Home() {
    const [services, setServices] = useState([
        {
            id: 1,
            icon: FaLaptopCode,
            title: "Web Development",
            description: "Creating responsive and interactive websites."
        },
        {
            id: 2,
            icon: FaMobileAlt,
            title: "Mobile Development",
            description: "Building mobile applications for various devices."
        },
        {
            id: 3,
            icon: FaServer,
            title: "Backend Integration",
            description: "Implementing robust backend systems."
        },
        {
            id: 4,
            icon: FaCloud,
            title: "Hosting Services",
            description: "Offering hosting and domain name services."
        },
        {
            id: 5,
            icon: FaDatabase,
            title: "Database Management",
            description: "Providing regular updates and database management."
        },
        {
            id: 6,
            icon: FaSyncAlt,
            title: "Maintenance",
            description: "Ensuring your site remains up-to-date and secure."
        },
    ]);
    const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const projects: {
        title: string,
        description: string,
        techStack: string[],
        images: string[],
        github?: string
    }[] = [
        {
            title: "Eventful",
            description: "An events management platform where users could create and manage groups and events, including making them either public or private, and free of charge or require a payment. In addition, users could add the events to their own Google Calendar, and manage invites, access requests, and more.",
            techStack: ["React", "Express", "Stripe", "Google API", "Tailwind CSS", "PostgreSQL"],
            images: ["assets/eventful/01.png", "assets/eventful/02.png", "assets/eventful/03.png", "assets/eventful/04.png"],
            github: "https://github.com/Howling-Techie/events-platform-fe"
        },
        {
            title: "Materialize",
            description: "Materialize is a site dedicated to helping Discord Servers organise movie nights. Users can log in via Discord, register their server, and create movie nights. Other members of the server can then log in, submit movies that they'd like to watch on the night, and then finally cast their votes in a ranked ordering system to select what film they'd like to see.",
            techStack: ["React", "Express", "Discord Auth", "TMDB API", "Tailwind CSS", "PostgreSQL"],
            images: ["assets/materialize/01.png", "assets/materialize/02.png", "assets/materialize/03.png"]
        },
        {
            title: "InventorEEE",
            description: "InventorEEE was a management platform for a company that specialises in handling e-waste. They needed a service that would allow them to manage clients and their e-waste collection requests, assigning dates and drivers to the created collections. Once the orders have arrived at the facility, their progress could be tracked by applying the generated barcodes to each item which could be used to quickly look up the item and update its status, including the options to rename items, add notes, and upload data destruction certificates.",
            techStack: ["React", "Express", "Tailwind CSS", "PostgreSQL"],
            images: ["assets/inventoreee/01.png", "assets/inventoreee/02.png", "assets/inventoreee/03.png"]
        },
    ];

    const sensors = useSensors(
        useSensor(PointerSensor, {
            // Press delay of 250ms, with tolerance of 5px of movement
            activationConstraint: {
                delay: 400,
                tolerance: 200,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const HideImage = () => {
        setShowImage(false);
    };

    const ShowImage = (image: string) => {
        setSelectedImage(image);
        setShowImage(true);
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-r from-[#00224D] to-[#000825] text-white flex flex-col items-center font-sans">
            {showImage && <HighlightedImage image={selectedImage} onHide={HideImage}/>}
            <header className="w-full py-4 flex justify-center items-center bg-[#FF204E] shadow-lg">
                <div className="flex flex-col md:flex-row justify-center">
                    <img className="object-contain max-h-24 md:max-h-32"
                         src="./assets/LAUNCH.png"
                         alt="Launch"/><img
                    className="object-contain max-h-24 md:max-h-32"
                    src="./assets/CODE.png" alt="Code"/>
                </div>
            </header>

            <main className="w-full max-w-6xl flex flex-col items-center px-6 py-10">
                <section className="w-full mb-16 text-center">
                    <h2 className="flex justify-center text-[140px] font-bold text-[#FF204E] mb-6"><VscRocket
                        className=""/></h2>
                    <div
                        className="bg-gray-700 bg-opacity-50 drop-shadow-2xl border border-[#FFFFFF80] backdrop-blur mx-auto max-w-4xl p-8 rounded-lg shadow-lg">
                        <p className="text-lg">
                            Welcome to LaunchCode! I am a passionate full stack web developer dedicated to
                            bringing your digital projects to life. My expertise spans a wide range of
                            technologies, allowing me to create stunning websites and applications that perform
                            seamlessly on both desktop and mobile devices.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Whether you need a simple static website or a complex project with robust backend
                            systems,
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
                                hosting services for the completed sites, including domain name acquisition and
                                security
                                certification.
                            </li>
                            <li className="transition duration-500 transform hover:translate-x-2 group-hover:opacity-50 hover:!opacity-100">Providing
                                regular updates and database management as needed.
                            </li>
                        </ul>
                        <p className="mt-4 text-lg leading-relaxed">
                            I pride myself on delivering high-quality, visually appealing, and user-friendly
                            digital
                            solutions that cater to your unique business needs. Browse through my portfolio
                            below to
                            see
                            examples of my work.
                        </p>
                    </div>
                </section>
                <section className="w-full mb-16">
                    <h2 className="text-4xl font-bold text-[#FF204E] mb-6 text-center">Services</h2>
                    <div className="w-full justify-center hidden md:flex">
                        <h3 className="absolute text-white text-sm rotate-12 w-48 text-center -translate-y-16 translate-x-1/2">
                            Click and Drag Us!</h3>
                    </div>
                    <div className="hidden md:inline">
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                        >
                            <SortableContext
                                items={services}
                                strategy={rectSortingStrategy}
                            >
                                <div className="grid grid-cols-3 gap-8">
                                    {services.map(item => <ServiceItem key={item.id} id={item.id}>
                                        <div
                                            className="min-h-full group service-item bg-white text-black p-6 rounded-lg shadow-lg delay-300 active:shadow-2xl duration-750 transition transform active:scale-105 flex flex-col items-center overflow-hidden"
                                            aria-label={item.title}>
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] transform -translate-x-full group-active:translate-x-0 transition-transform duration-500 ease-in-out overflow-hidden z-10">
                                                <div
                                                    className="absolute z-10 flex flex-col items-center text-white duration-500 ease-in-out translate-x-full group-active:translate-x-0 py-6 px-6 w-full">
                                                    <item.icon className="text-6xl mb-4 transition"/>
                                                    <h3 className="text-center text-2xl font-semibold mb-2 transition">{item.title}</h3>
                                                    <p className="text-center transition">{item.description}</p>
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-col items-center text-black w-full">
                                                <item.icon className="text-[#FF204E] text-6xl mb-4"
                                                           aria-hidden="true"/>
                                                <h3 className="text-center text-2xl font-semibold mb-2 bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] bg-clip-text text-transparent">{item.title}</h3>
                                                <p className="text-center">{item.description}</p>
                                            </div>
                                        </div>
                                    </ServiceItem>)}
                                </div>
                            </SortableContext>
                        </DndContext>
                    </div>
                    <div className="md:hidden">
                        <div className="grid grid-cols-1 gap-8">
                            {services.map(item => <ServiceItem key={item.id} id={item.id}>
                                <div
                                    className="min-h-full group service-item bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl duration-750 transition transform hover:scale-105 flex flex-col items-center overflow-hidden"
                                    aria-label={item.title}>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out overflow-hidden z-10">
                                        <div
                                            className="absolute z-10 flex flex-col items-center text-white duration-500 ease-in-out translate-x-full group-hover:translate-x-0 py-6 px-6 w-full">
                                            <item.icon className="text-6xl mb-4 transition"/>
                                            <h3 className="text-center text-2xl font-semibold mb-2 transition">{item.title}</h3>
                                            <p className="text-center transition">{item.description}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col items-center text-black w-full">
                                        <item.icon className="text-[#FF204E] text-6xl mb-4"
                                                   aria-hidden="true"/>
                                        <h3 className="text-center text-2xl font-semibold mb-2 bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] bg-clip-text text-transparent">{item.title}</h3>
                                        <p className="text-center">{item.description}</p>
                                    </div>
                                </div>
                            </ServiceItem>)}
                        </div>
                    </div>
                </section>
                <section className="w-full mb-16">
                    <h2 className="text-4xl font-bold text-[#FF204E] mb-6 text-center">Portfolio</h2>
                    <div className="flex flex-col space-y-8 ">
                        {projects.map((project, index) => (
                            <div key={index}
                                 className="bg-white text-black p-6 rounded-lg shadow-lg">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
                                    <ImageCarousel images={project.images} showImage={ShowImage}/>
                                    <div className="flex flex-col space-y-2 md:w-1/2 justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] bg-clip-text text-transparent mb-2">{project.title}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                   className="text-[#FF204E] font-semibold underline mt-4">View on
                                                    GitHub</a>
                                            )}
                                            <div className="flex flex-wrap gap-2 mt-2 items-center">
                                                {project.techStack.map((tech, idx) => (
                                                    <div key={idx}
                                                         className="flex flex-grow justify-center px-2 py-1 bg-[#FF204E] text-white text-sm font-semibold rounded">{tech}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="w-full mb-16">
                    <h2 className="text-4xl font-bold text-[#FF204E] mb-6 text-center">Contact</h2>
                    <div
                        className="flex flex-wrap justify-center gap-8 p-8 bg-gradient-to-r from-[#FF204E] to-[#FF5A5E] rounded-lg shadow-2xl">
                        {[
                            {icon: FaTwitter, title: "Twitter", url: "https://twitter.com/"},
                            {icon: FaEnvelope, title: "Email", url: "mailto:contact@domain.com"},
                            {icon: FaGithub, title: "GitHub", url: "https://github.com/howling-techie"},
                            {icon: FaLinkedin, title: "LinkedIn", url: "https://linkedin.com/"},
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
                <p>2024 LaunchCode.</p>
            </footer>
        </div>
    );

    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        if (over)
            if (active.id !== over.id) {
                setServices((items) => {
                    const oldIndex = items.findIndex(i => i.id === active.id);
                    const newIndex = items.findIndex(i => i.id === over.id);

                    return arrayMove(items, oldIndex, newIndex);
                });
            }
    }
}

const ImageCarousel = ({images, showImage}: { images: string[], showImage: (image: string) => void }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage === images.length - 1 ? 0 : prevImage + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="w-full rounded-lg">
            <div className="relative h-96 cursor-pointer" onClick={() => showImage(images[currentImage])}>
                {images.map((image, index) => (
                    <div key={index} className="w-full flex justify-center absolute">
                        <img
                            src={image}
                            alt={`Project screenshot ${index + 1}`}
                            className={`rounded-lg h-96 flex overflow-clip object-contain inset-0 transition-opacity duration-1000 ${
                                index === currentImage ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </div>
                ))}
                <div className="absolute bottom-2 left-2 flex space-x-2">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`h-2 w-2 rounded-full transition duration-300 ${
                                index === currentImage
                                    ? "bg-white"
                                    : "bg-gray-400"
                            }`}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="flex flex-row content-evenly h-32 overflow-x-scroll">
                {images.map((image, index) => (
                    <img
                        onClick={() => setCurrentImage(index)}
                        key={index}
                        src={image}
                        alt={`Project screenshot ${index + 1}`}
                        className={`cursor-pointer object-contain h-32 transition duration-300 rounded-lg border-2 ${
                            index === currentImage
                                ? "border-gray-600"
                                : "border-white"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

const HighlightedImage = ({image, onHide}: {
    image: string, onHide:
        () => void;
}) => {
    return (
        <div
            className="fixed w-svw h-svh flex justify-center items-center z-30 cursor-pointer"
            onClick={() => onHide()}>
            <div className="bg-black w-full h-full opacity-70 absolute z-40"/>
            <div className="p-4 md:p-24 z-50">
                <img src={image} alt="Image preview" className="object-contain"/>
            </div>
        </div>);
};
