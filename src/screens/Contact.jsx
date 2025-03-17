
import bgImage from '../assets/test0.png';
import MapView from '../molecules/MapView';
import ContactUsForm from "../molecules/ContactUsForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 bg-gray-100">
      <div className="flex justify-center items-center">
        <div className="w-1/2 p-4 text-white text-center">
        <ContactUsForm/>
        </div>
        <div className="w-1/2 p-4 text-white text-center">
          <img src={bgImage} alt="Sample" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
      <p className="">
        Permanent  address- Behind R K Paper Mill Gandhi Nagar Bhopa Road Muzaffarnagar Uttar Pradesh-251001.
      </p>

      <MapView />
    </div>
  )

};
export default Contact;
