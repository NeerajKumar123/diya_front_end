import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 w-80">
     <img src={image} alt={title} className="w-50 h-50 object-cover rounded-full mx-auto" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const OurIdeals = () => {
  const data = [
    {
      image: "https://res.cloudinary.com/dc1hi8sjj/image/upload/v1742915715/WhatsApp_Image_2025-03-25_at_8.34.42_PM_lwntek.jpg",
      title: "Dr. RD Gaur",
      description: "Senior Medical Officer"
    },
    {
      image: "https://res.cloudinary.com/dc1hi8sjj/image/upload/v1742915594/WhatsApp_Image_2025-03-25_at_8.42.28_PM_trexgi.jpg",
      title: "Mr. Sajeev Malik(Masoom)",
      description: " Senior Social Activist"
    },
    {
      image: "https://res.cloudinary.com/dc1hi8sjj/image/upload/v1742916144/WhatsApp_Image_2025-03-25_at_8.48.29_PM_mlhcgn.jpg",
      title: "Mr. Kanwarpal Prajapati",
      description: "Gaurdian, Maharishi Prajapati Shiksha Samiti, Shukratal, Muzaffarnagar"
    }
    // {
    //   image: "https://yavuzceliker.github.io/sample-images/image-1.jpg",
    //   title: "Mr. Nafees Ahmad",
    //   description: "सचिव संकल्प सेवा समाज उत्थान समिति, मुजफ्फरनगर"
    // }
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {data.map((item, index) => (
        <Card key={index} image={item.image} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default OurIdeals;