import NewsCard from "../molecules/NewsCard";
import { useEffect, useState } from "react";
import {fetchNews} from "../services/HttpRequests.jsx"

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchNews().then(setNews);
  }, []);


  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 bg-[#16C47F]">
      <div className="px-6">
        <h1 className="text-3xl font-bold text-center mb-6">Latest News</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default News;
