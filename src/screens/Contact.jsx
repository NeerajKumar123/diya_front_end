
import bgImage from '../assets/test0.png';
import MapView from '../molecules/MapView';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 bg-gray-100">
      <div className="flex">
        <div className="w-1/2 bg-blue-500 p-4 text-white text-center">
          <form className="space-y-4">
            <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="tel" placeholder="Mobile Number" className="w-full p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2 bg-green-500 p-4 text-white text-center">
          <img src={bgImage} alt="Sample" className="w-full h-auto rounded-lg shadow-lg" />
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
