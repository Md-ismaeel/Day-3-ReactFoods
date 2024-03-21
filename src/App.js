import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import { RestaurantCard } from "./components/RestaurantCart"
import { Contact } from "./components/Contact";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/quote" element={<Quotes />}>
          </Route>
          <Route path="/restaurants" element={<RestaurantCard />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App;
