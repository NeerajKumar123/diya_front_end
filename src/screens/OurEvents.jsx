import React from "react";
import EventCard from "../molecules/EventCard";
import Loading from "../molecules/Loading.jsx";

import { fetchEvents } from "../services/HttpRequests.jsx"
import { useEffect, useState } from "react";

const OurEvents = () => {

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <div className="flex flex-col min-h-screen px-6 bg-[#16C47F]">
      <h1 className="text-3xl font-bold text-center my-6">Upcoming Events</h1>
      {events?.length > 0 ?
        <div className="grid md:grid-cols-3 gap-6 flex-grow">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        : <Loading />
      }
    </div>
  );
};

export default OurEvents;