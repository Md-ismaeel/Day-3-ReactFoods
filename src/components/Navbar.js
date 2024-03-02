import "../Style/navbar.css";
import image1 from "../Assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <div id="nav-container">
        <div className="geeks-food">
          <img src={image1} width={"32px"} height={"32px"} />
          <p>GeekFoods</p>
        </div>

        <ul id="list-items">
          <li>
            <a href="#" style={{ color: "blue" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#">Quote</a>
          </li>
          <li>
            <a href="#">Restaurants</a>
          </li>
          <li>
            <a href="#">Food</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button className="geeks-button">Get started</button>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
