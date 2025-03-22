import React from "react";
import Mission from "../molecules/Mission.jsx"

const mission = `Save and made a healthy Environment and natural resource management <br/> Awareness programme for Health & Nutrition, HIV/AIDS, Tuberculosis, and other  as Immunization, Malaria, Dengue, MR campaign, JE Campaign etc.\nLabour & Employment, Legal Awareness programs for rural development.\nOrganize tree plantation programs to maintain balance in nature and atmosphere.\nOrganize skill development programs for Poverty Alleviation , Women Development & Empowerment.`
const About = () => {

  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 bg-gray-100">
      <div className="w-full bg-blue-700 min-h-20 flex justify-center">
        <h1 className="text-7xl text-center text-white font-bold"> Our Core Values</h1>
      </div>
      <p className="py-6 px-6 text-center">
        Diya Samajik Sanstha (DSS) is a non government organazation who registered under Societies Registration Act article-21,1860 UP.
        registration no is 363(2011-2012)
        A Niti Aayog ragestred NGO by Govt of India, unique id is UP/2019/0237470.
        Our organization  Aims-
        Awareness for poor and needy people for bringing them to main stream society by providing Health, Education, training and basic needs especially for the development of children & women.
        Diya worked also in the area of Environment and natural resource management, Health & Nutrition, HIV/AIDS /Tuberculosis and other Awareness Programme under the health department as Immunization, Malaria, Dengue , MR campaign, JE Campaign.
        Labour & Employment, Legal Awareness & Aid, Rural Development & Poverty Alleviation, Women Development & empowerment, CSR training etc.
        The NGO works towards the promotion of sustainable development.
      </p>

      <div className="w-full bg-pink-600 min-h-20 flex justify-center">
        <h1 className="px-7 py-7 text-3xl text-center text-white">
          We believe all women can embrace who they are,
          can define their future, and can change the world.
        </h1>
      </div>

      <div className="w-full bg-green-500 min-h-20 flex justify-center mt-4">
        <h1 className="text-7xl text-center text-white font-bold"> Our Mission</h1>
      </div>
      <div className=" w-full">
        <p className=" w-full text-center">
          . Save and made a healthy Environment and natural resource management.
        </p>
        <p className=" w-full text-center">
          . Awareness programme for Health & Nutrition, HIV/AIDS, Tuberculosis, and other  as Immunization, Malaria, Dengue, MR campaign, JE Campaign etc.
        </p>
        <p className=" w-full text-center">
          . Labour & Employment, Legal Awareness programs for rural development .
        </p>
        <p className=" w-full text-center">
          . Organize tree plantation programs to maintain balance in nature and atmosphere.
        </p>
        <p className=" w-full text-center">
          . Organize skill development programs for Poverty Alleviation , Women Development & Empowerment.
        </p>
      </div>

      <div className="w-full bg-amber-300 min-h-20 flex justify-center mt-4">
        <h1 className="text-7xl text-center text-white font-bold"> Our Vision</h1>
      </div>
      <div className="w-full">
        <p className=" w-full text-center">
          . To help ensure a healthy environment for current and future generations.
        </p>
        <p className="w-full text-center">
          . Tree plantation is very important for our life.
        </p>
        <p className=" w-full text-center">
          . Seekho aur Atamnirbhar bano.
        </p>
        <p className=" w-full text-center">
          .Hunar hai to Kadar hai.
        </p>
      </div>

      
    </div>
  )


};
export default About;
