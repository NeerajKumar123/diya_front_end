import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-200 dark:bg-gray-800 mt-12 text-center">
      <p className="text-gray-700 dark:text-gray-300">Support us today & join us!</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link to="/supportus" className="text-blue-600 hover:underline">Support Us</Link>
        <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mt-5">© {new Date().getFullYear()} | Privacy Policy</p>
    </footer>
  );
};

export default Footer;
