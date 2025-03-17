import NewsCard from "../molecules/NewsCard";

const newsArticles = [
  {
    id: 1,
    title: "Tech Conference 2025 Announced",
    description: "The biggest tech conference is coming this year with exciting innovations.",
    image: "https://yavuzceliker.github.io/sample-images/image-1.jpg",
    date: "March 17, 2025",
  },
  {
    id: 2,
    title: "New AI Breakthrough",
    description: "Scientists have achieved a new milestone in AI and Machine Learning.",
    image: "https://yavuzceliker.github.io/sample-images/image-2.jpg",
    date: "March 16, 2025",
  },
  {
    id: 3,
    title: "Climate Change Updates",
    description: "Experts warn about the rapid effects of global warming on our environment.",
    image: "https://yavuzceliker.github.io/sample-images/image-3.jpg",
    date: "March 15, 2025",
  },
  {
    id: 4,
    title: "New AI Breakthrough",
    description: "Scientists have achieved a new milestone in AI and Machine Learning.",
    image: "https://yavuzceliker.github.io/sample-images/image-4.jpg",
    date: "March 16, 2025",
  },
  {
    id: 5,
    title: "Climate Change Updates",
    description: "Experts warn about the rapid effects of global warming on our environment.",
    image: "https://yavuzceliker.github.io/sample-images/image-5.jpg",
    date: "March 15, 2025",
  },
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 bg-gray-100">
      <div className="px-6">
        <h1 className="text-3xl font-bold text-center mb-6">Latest News</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default News;
