import bgImage from "../assets/tree.png"


const SupportUs = () => {

  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 bg-gray-100">
      <div className="w-full bg-blue-700 py-4 flex flex-col justify-center items-center min-h-32">
        <h1 className="text-7xl text-center text-white font-bold">Support Us</h1>
      </div>

      <p className="py-6 px-6 text-center">
        To run this organisation and to help the society, we need support.
      </p>
      <div className=" bg-green-500 p-4 text-white text-center">
        <img src={bgImage} alt="Sample" className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="w-full bg-amber-50 py-4 flex flex-col justify-center items-center min-h-32">
        <h1 className="text-3xl  text-black font-bold">Let's Make A Change</h1>
        <p className="py-6 px-6 text-center">
          Here are some ways you can donate:
        </p>
      </div>

      <div className="w-full  bg-gray-100 flex py-5">
        {/* Left Section - Text */}
        <div className="w-1/2 bg-gray-100 p-6">
          <img src={bgImage} alt="Sample" className="rounded-lg shadow-lg w-10 h-10" />
          <span className="text-gray-700 font-semibold text-3xl">In Person</span>
          <p className="text-gray-800 text-justify leading-relaxed">
            Diya Samajik Sanstha,
            Permanent  address- Behind R K Paper Mill Gandhi Nagar Bhopa Road Muzaffarnagar Uttar Pradesh-251001.
          </p>
        </div>

        {/* Left Section - Text */}
        <div className="w-1/2 bg-gray-100 p-6">
          <img src={bgImage} alt="Sample" className="rounded-lg shadow-lg w-10 h-10" />
          <span className="text-gray-700 font-semibold text-3xl">Online</span>
          <p className="text-gray-800 text-justify leading-relaxed">
            Account Name. Diya Samajik Sanstha
            Account no. 1456101117192
            ifsc code      CNRB0001456
            MICR code   251015002
            PAN No.       AABAD3145P
            Canara Bank
            Devi Markit main
            Muzaffarnagar
          </p>
        </div>
      </div>
    </div>
  )
};
export default SupportUs;
