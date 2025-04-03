const SocialBar = () => {
    return (
      <div className="w-full flex justify-between items-center bg-gray-100 p-4">
        {/* Left-aligned text */}
        <span className="text-lg font-semibold text-gray-700">Diya Samajik Sanstha</span>
        
        {/* Right-aligned social icons using images */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/share/15vkNso9V8/" target="_blank" rel="noopener noreferrer">
            <img src="/fb.svg" alt="Facebook" className="w-5 h-5" />
          </a> 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.svg" alt="Twitter" className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@diyasamajiksanstha3883/featured" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.svg" alt="YouTube" className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/diya-samajik-sanstha-66594514a/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="YouTube" className="w-5 h-5" />
          </a>
        </div>
      </div>
    );
  };
  
  export default SocialBar;
  