import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GalleryCarousel from "../molecules/GalleryCarousel";
import EventCard from "../molecules/EventCard";
import NewsCard from "../molecules/NewsCard";
import { useNavigate } from "react-router-dom";
import { fetchNews, fetchEvents, fetchGallary } from "../services/HttpRequests.jsx"
import Loading from "../molecules/Loading.jsx";
import OurIdeals from "../molecules/OurIdeals.jsx";

const Home = () => {

    const [news, setNews] = useState([]);
    const [events, setEvents] = useState([]);
    const [gallaryImages, setGallaryImages] = useState([]);

    useEffect(() => {
        fetchNews().then(setNews);
        fetchEvents().then(setEvents);
        fetchGallary().then(setGallaryImages)
    }, [])
    const navigate = useNavigate();

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
        <div className="min-h-screen flex flex-col items-center text-center p-6 bg-[#16C47F]">
            {/* Hero Section */}
            <section
                className="w-full py-12 bg-cover bg-center bg-no-repeat relative min-h-[75vh] bg-[url('https://res.cloudinary.com/dc1hi8sjj/image/upload/v1742451861/plant8_g5niqx.jpg')]"
            >
                {/* <motion.h1
                    className="text-4xl font-bold bg-gray-200 text-[#16C47F] bg-opacity-10 rounded-2xl "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Helping Society to be skilled and self-dependent
                </motion.h1> */}
                <motion.div
                    className="mt-50 flex gap-4 justify-center"
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
            <h1 className="text-4xl font-semibold mb-2 text-white">Our Ideals</h1>
            <OurIdeals/>

            {/* News Section */}
            <section className="w-full py-12">
                <h2 className="text-2xl font-semibold text-gray-900">Latest News</h2>
                {news?.length ?
                    <div className="grid md:grid-cols-3 gap-6 mt-2">
                        {news.map((article) => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div> :
                    <Loading />}
            </section>

            {/* Upcoming Events Section */}
            <section className="w-full py-12">
                <h2 className="text-2xl font-semibold text-gray-900">Upcoming Events</h2>
                {events?.length ?
                    <div className="grid md:grid-cols-3 gap-6 flex-grow mt-2">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div> :
                    <Loading loaderDesc={"Loading events..."} />
                }
            </section>
            {/* Gallery Section */}
            <section className="w-full py-12">
                <h2 className=" w-full text-2xl font-semibold text-gray-900 mt-2">Our Captured Moments</h2>
                {gallaryImages?.length ? <GalleryCarousel images={gallaryImages} /> : <Loading />
                }
            </section>
        </div>
    );
};

export default Home;
