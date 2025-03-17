import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 w-full bg-orange-400 text-white p-4 z-50 flex justify-between items-center">
      <h2 className="text-xl font-bold">Diya Sanstha</h2>
      <ul className="flex gap-6">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`text-white text-lg ${
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

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/supportus", label: "Support Us" },
  { path: "/news", label: "News" },
  { path: "/events", label: "Events" },
  { path: "/contact", label: "Contact" },
];

export default Navbar;
