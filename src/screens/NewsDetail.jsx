import { useLocation, useNavigate } from "react-router-dom";

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <h2 className="text-center text-red-500">News not found</h2>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 bg-[#16C47F]">
      <button 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="text-4xl font-bold text-gray-800">{article.title}</h1>
      <p className="text-sm text-gray-500">{article.date}</p>
      <img src={article.imageUrl} alt={article.title} className="w-full mt-4 rounded-lg shadow-md" />
      <p className="mt-6 text-lg text-gray-700">{article.description}</p>
    </div>
  );
};

export default NewsDetail;
