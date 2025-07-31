import { Routes, Route, Link } from "react-router-dom";
import App from "./App"; // this is your Home page
import About from "./About";
import Contact from "./Contact";

const AppRoutes = () => {
  return (
    <>
      {/* Shared Nav */}
      <nav className="bg-zinc-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold font-poppins">MySite</div>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
