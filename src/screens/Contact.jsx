
import MapView from '../molecules/MapView';
import ContactUsForm from "../molecules/ContactUsForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 bg-[#16C47F]">
      <div className="flex justify-center items-center">
      <ContactUsForm/>
      </div>
      <p className="pt-5">
        Permanent  address- Behind R K Paper Mill Gandhi Nagar Bhopa Road Muzaffarnagar Uttar Pradesh-251001.
      </p>
      <MapView />
    </div>
  )

};
export default Contact;
