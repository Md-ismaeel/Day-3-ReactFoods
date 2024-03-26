import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import { RestaurantCard } from "./components/RestaurantCart"
import { Contact } from "./components/Contact";
import { Food } from "./components/Food";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quotes />} />
          <Route path="/restaurants" element={<RestaurantCard />} />
          <Route path="/food" element={<Food />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App;
