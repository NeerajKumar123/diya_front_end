import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <Link to={'/newsdetail'} state={{ article }} className="block">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
        {/* News Image */}
        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
        {/* Content */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{article.title}</h2>
          <p className="text-sm text-gray-500">{article.date}</p>
          <p className="mt-2 text-gray-700">{article?.description?.substring(0, 60)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
