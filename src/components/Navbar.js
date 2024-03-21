import "../Style/navbar.css";
import image1 from "../Assets/logo.svg";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <div id="nav-container">
        <div className="geeks-food">
          <img src={image1} width={"32px"} height={"32px"} />
          <p>GeekFoods</p>
        </div>

        <ul id="list-items">
          <li>
            <NavLink to="/" className={activeLink === "/" ? 'text-blue-600 text-xl' : ""}>
              Home
            </NavLink>
          </li>
          <NavLink to="/quote" className={activeLink === "/quote" ? "text-blue-600 text-xl" : ""}>
            Quote
          </NavLink>
          <li>
            <NavLink to="/restaurants" className={activeLink === "/restaurants" ? "text-blue-600 text-xl" : ""}>Restaurants</NavLink>
          </li>

          <li>
            <NavLink to="/food" className={activeLink === "/food" ? "text-blue-600 text-xl" : ""} >Food</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeLink === "/contact" ? "text-blue-600 text-xl" : ""}>Contact</NavLink>
          </li>
        </ul>

        <button className="geeks-button">Get started</button>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
