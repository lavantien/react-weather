import PropTypes from "prop-types"; // Import PropTypes for validation
import { Link, NavLink } from "react-router-dom";

function Navigation({ currentPage, onPageChange }) {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between">
      <Link to="/" className="text-xl font-bold">
        Simple Weather and Star War Listing Web App
      </Link>
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            activeClassName="text-blue-500 underline"
            className={`px-2 py-1 rounded hover:bg-gray-700 ${
              currentPage === "todo" ? "text-blue-500 underline" : ""
            }`}
            onClick={() => onPageChange("todo")}
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weather"
            activeClassName="text-blue-500 underline"
            className={`px-2 py-1 rounded hover:bg-gray-700 ${
              currentPage === "weather" ? "text-blue-500 underline" : ""
            }`}
            onClick={() => onPageChange("weather")}
          >
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/star-wars"
            activeClassName="text-blue-500 underline"
            className={`px-2 py-1 rounded hover:bg-gray-700 ${
              currentPage === "star-wars" ? "text-blue-500 underline" : ""
            }`}
            onClick={() => onPageChange("star-wars")}
          >
            Star Wars
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Navigation;
