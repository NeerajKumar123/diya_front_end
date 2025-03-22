import React from "react";

const Mission = () => {
  const initiatives = [
    {
      title: "Healthy Environment & Natural Resource Management",
      description: "Save and promote a healthy environment and manage natural resources."
    },
    {
      title: "Health & Nutrition Awareness",
      description: "Conduct awareness programs on Health & Nutrition, HIV/AIDS, Tuberculosis, Immunization, Malaria, Dengue, MR campaign, JE campaign, etc."
    },
    {
      title: "Labour & Legal Awareness",
      description: "Implement Labour & Employment initiatives and Legal Awareness programs for rural development."
    },
    {
      title: "Tree Plantation Programs",
      description: "Organize tree plantation programs to maintain ecological balance."
    },
    {
      title: "Skill Development & Women Empowerment",
      description: "Conduct skill development programs for Poverty Alleviation, Women Development, and Empowerment."
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Our Mission</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initiatives.map((initiative, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-600">{initiative.title}</h2>
            <p className="text-gray-700 mt-2">{initiative.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
