import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar/Navbar.js";
import TourList from "./components/TourList/TourList";

function App() {
  return (
    <div>
      <Navbar />
      Our App
      <FontAwesomeIcon icon={faCoffee} />
      <TourList />
    </div>
  );
}

export default App;
