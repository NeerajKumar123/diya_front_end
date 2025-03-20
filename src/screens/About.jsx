import React from "react";
const About = () => {

  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 bg-gray-100">
      <div className="w-full bg-blue-700 min-h-20 flex justify-center">
        <h1 className="text-7xl text-center text-white font-bold"> Our Core Values</h1>
      </div>

      <p className="py-6 px-6 text-center">
        Diya Samajik Sanstha (DSS) is a Society, registered under Societies
        Registration Act by the Govt. of UP in the year 2011 and an NGO of NITI AAYOG, Govt of India. It aims awareness for poor and needy people for bringing them to main stream  society by providing Health, Education, training and basic needs especially for the development of children & women. Diya  worked also in the area of Environment and natural resource management, Health & Nutrition, HIV/AIDS ,Tuberculosis and  other Awareness  Programme under the health department as Immunisation, Malaria, Dengue , MR  campaign, JE Campaign.  Labour & Employment, Legal Awareness & Aid, Rural Development & Poverty Alleviation, Women Development & Empowerment, CSR Training Etc.
        The NGO works towards the promotion of sustainable development.
      </p>

      <div className="w-full bg-pink-600 min-h-20 flex justify-center">
        <h1 className="px-7 py-7 text-3xl text-center text-white">
          We believe all women can embrace who they are,
          can define their future, and can change the world.
        </h1>
      </div>

      <div className="w-full  bg-gray-100 flex py-5">
        {/* Left Section - Text */}
        <div className="w-1/2 bg-gray-100 p-6">
        <img src="https://yavuzceliker.github.io/sample-images/image-1.jpg" alt="Sample" className="w-full h-auto rounded-lg shadow-lg" />
          <span className="text-gray-700 font-semibold text-3xl">Our Mission</span>
          <p className="text-gray-800 text-justify leading-relaxed">
            NGO-Mission save and made a healthy Environment and natural resource management, Health & Nutrition, HIV/AIDS, Tuberculosis, and other Awareness Programmes under the health department as Immunisation, Malaria, Dengue, MR  campaign, JE Campaign.  Labour & Employment, Legal Awareness & Aid, Rural Development & Poverty Alleviation, Women Development & Empowerment.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 bg-gray-100 flex justify-center items-center">
          <img src="src/assets/test.png" alt="NGO Work" className="w-3/4 h-auto object-cover" />
        </div>
      </div>


      <div className="w-full bg-red-500 flex">
        {/* Left Section - Text */}
        <div className="w-1/2 bg-gray-100 flex justify-center items-center">
          <img src="src/assets/test.png" alt="NGO Work" className="w-3/4 h-auto object-cover" />
        </div>


        {/* Right Section - Image */}
        <div className="w-1/2 bg-gray-100 p-6">
          <span className="text-gray-700 font-semibold text-3xl">Our Vision</span>
          <p className="text-gray-800 text-justify leading-relaxed">
            Clean environment(Clear Air, Clean Water, Clean)
            Women Empowerment keeping in mind "Hunar hai to Kadra hai".
          </p>
        </div>
      </div>

    </div>
  )


};
export default About;
