import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/supportus", label: "Support Us" },
  { path: "/news", label: "News" },
  { path: "/events", label: "Events" },
  { path: "/contact", label: "Contact" },
];


const HomeIcon = () => {
  return (
    <Link to="/">
      <img
        src="/LogoDiya.png"  
        alt="Home"
        className="w-12 h-12 cursor-pointer hover:opacity-80 "
      />
    </Link>
  );
};


const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 w-full bg-[#F8ED8C] text-white p-2 z-50 flex justify-between items-center">
      <HomeIcon/>
      <ul className="flex gap-6">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`text-[#261FB3] text-lg ${
                location.pathname === path ? "font-semibold underline" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Navbar;
