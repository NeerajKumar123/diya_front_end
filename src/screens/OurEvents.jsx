import React from "react";
import EventCard from "../molecules/EventCard";

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
    chiefGuest:"Neeraj Parajapati, Amit Parajapati, Ompal Parajapati"
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
    chiefGuest:"Neeraj Parajapati, Amit Parajapati, Ompal Parajapati"
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
    chiefGuest:"Neeraj Parajapati, Amit Parajapati, Ompal Parajapati"
  }
];

const OurEvents = () => {
  return (
    <div className="flex flex-col min-h-screen px-6">
      <h1 className="text-3xl font-bold text-center my-6">Upcoming Events</h1>
      <div className="grid md:grid-cols-3 gap-6 flex-grow">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default OurEvents;