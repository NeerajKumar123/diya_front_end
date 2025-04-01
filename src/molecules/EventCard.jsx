import React from "react";

const EventCard = ({ event }) => {    
    const openMap = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue)}`;
        window.open(googleMapsUrl, "_blank");
    };
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 hover:shadow-lg transition cursor-pointer">
            <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
            <h2 className="text-xl font-bold text-blue-700">{event.name}</h2>
            <p className="text-gray-500 text-sm">📅 {event.date} | 🕒 {event.time}</p>
            <p className="text-gray-700 mt-2">{event.description}</p>
            <p className="text-gray-600 text-sm mt-2 cursor-pointer hover:underline" onClick={openMap}>📍 Venue: {event.venue}</p>
            <p className="text-gray-600 text-sm">👨‍💼 Organizer: {event.organizer}</p>
            <p className="text-gray-600 text-sm mt-2">🎤 Chief Guest: {event.chiefGuest}</p>
        </div>
    );
};

export default EventCard;
