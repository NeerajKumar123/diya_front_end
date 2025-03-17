import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GalleryCarousel from "../molecules/GalleryCarousel";
import EventCard from "../molecules/EventCard";
import NewsCard from "../molecules/NewsCard";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/test0.png";

const Home = () => {
    const navigate = useNavigate();
    const newsArticles = [
        {
            id: 1,
            title: "Tech Conference 2025 Announced",
            description: "The biggest tech conference is coming this year with exciting innovations.",
            image: "https://yavuzceliker.github.io/sample-images/image-1.jpg",
            date: "March 17, 2025",
        },
        {
            id: 2,
            title: "New AI Breakthrough",
            description: "Scientists have achieved a new milestone in AI and Machine Learning.",
            image: "https://yavuzceliker.github.io/sample-images/image-2.jpg",
            date: "March 16, 2025",
        },
        {
            id: 3,
            title: "Climate Change Updates",
            description: "Experts warn about the rapid effects of global warming on our environment.",
            image: "https://yavuzceliker.github.io/sample-images/image-3.jpg",
            date: "March 15, 2025",
        },
        {
            id: 4,
            title: "New AI Breakthrough",
            description: "Scientists have achieved a new milestone in AI and Machine Learning.",
            image: "https://yavuzceliker.github.io/sample-images/image-4.jpg",
            date: "March 16, 2025",
        },
        {
            id: 5,
            title: "Climate Change Updates",
            description: "Experts warn about the rapid effects of global warming on our environment.",
            image: "https://yavuzceliker.github.io/sample-images/image-5.jpg",
            date: "March 15, 2025",
        },
    ];

    const events = [

        {
            id: 1,
            name: "Tech Meetup 2025",
            date: "April 10, 2025",
            time: "10:00 AM",
            venue: "Tech Hub Auditorium, NY",
            description: "A gathering of tech enthusiasts to discuss the latest trends in AI and Web3.",
            organizer: "Tech Community NY",
            image: "https://yavuzceliker.github.io/sample-images/image-11.jpg",
            chiefGuest: "Neeraj Parajapati, Amit Parajapati, Ompal Parajapati"
        },
        {
            id: 2,
            name: "Startup Pitch Fest",
            date: "April 20, 2025",
            time: "2:00 PM",
            venue: "Silicon Valley Startup Hub",
            description: "Startup founders pitch their ideas to investors and mentors.",
            organizer: "SV Startup Network",
            image: "https://yavuzceliker.github.io/sample-images/image-12.jpg",
            chiefGuest: "Neeraj Parajapati, Amit Parajapati, Ompal Parajapati"
        },
        {
            id: 3,
            name: "Blockchain Conference",
            date: "May 5, 2025",
            time: "9:00 AM",
            venue: "Grand Expo Center, LA",
            description: "Exploring the future of blockchain technology and its applications.",
            organizer: "Blockchain Association",
            image: "https://yavuzceliker.github.io/sample-images/image-13.jpg",
            chiefGuest: "Neeraj Parajapati, Amit Parajapati, Ompal Parajapati"
        }
    ];

    const gallaryImages = [
        { name: "Plantation at MZN", url: "https://yavuzceliker.github.io/sample-images/image-10.jpg" },
        { name: "Plantation at MZN", url: "https://yavuzceliker.github.io/sample-images/image-11.jpg" },
        { name: "Plantation at MZN", url: "https://yavuzceliker.github.io/sample-images/image-12.jpg" },
        { name: "Plantation at MZN", url: "https://yavuzceliker.github.io/sample-images/image-10.jpg" },
        { name: "Plantation at MZN", url: "https://yavuzceliker.github.io/sample-images/image-11.jpg" },
        { name: "Plantation at MZN", url: "https://yavuzceliker.github.io/sample-images/image-12.jpg" },
        { name: "Plantation at MZN", url: "https://yavuzceliker.github.io/sample-images/image-10.jpg" },
        { name: "Plantation at MZN", url: "https://yavuzceliker.github.io/sample-images/image-11.jpg" },
        { name: "Plantation at MZN", url: "https://yavuzceliker.github.io/sample-images/image-12.jpg" }
    ];

    const tabs = [{ head: "Our Mission", sub: "Our Goal, Vision & Commitment", colorCode: "#C84869" },
    { head: "Our Events", sub: "Register & Help Make Change", colorCode: "#2A70DE" },
    { head: "Get Involved", sub: "Volunteer, Participate, or Donate", colorCode: "#213E8C" }
    ]

    const handleClick = (buttonName) => {
        const routes = {
            "Our Mission": "/about",
            "Our Events": "/events",
            "Get Involved": "/contact"
        };

        navigate(routes[buttonName]);
    };

    return (
        <div className="min-h-screen flex flex-col items-center text-center p-6 bg-gray-100">
            {/* Hero Section */}
            <section
                className="w-full py-12 bg-cover bg-center bg-no-repeat relative min-h-[33vh]"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <motion.h1
                    className="text-4xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Helping Society to be skilled and self-dependent
                </motion.h1>

                <motion.div
                    className="mt-6 flex gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/about">
                        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                            Explore Us
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                            Contact Us
                        </button>
                    </Link>
                </motion.div>
            </section>

            {/* Tabs Section */}
            <section className="w-full py-12 grid md:grid-cols-3 gap-6 justify-items-center">
                {tabs.map((item) => (
                    <motion.div
                        key={item.head}
                        className={"bg-blue-600 bg-opacity-80 p-4 rounded-lg shadow-lg text-white w-60 text-center"}
                        style={{ backgroundColor: item.colorCode }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => handleClick(item.head)}
                    >
                        <p className="text-lg font-semibold">{item.head}</p>
                        <p className="text-sm">{item.sub}</p>
                    </motion.div>
                ))}
            </section>

            {/* News Section */}
            <section className="w-full py-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Latest News</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {newsArticles.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="w-full py-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Upcoming Events</h2>
                <div className="grid md:grid-cols-3 gap-6 flex-grow">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section className="w-full py-12">
                <h2 className=" w-full text-2xl font-semibold text-gray-900 dark:text-white">Our Captured Moments</h2>
                <GalleryCarousel images={gallaryImages} />
            </section>
        </div>
    );
};

export default Home;
