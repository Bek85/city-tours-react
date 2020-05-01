import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faWindowClose,
  faCaretSquareDown,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar/Navbar.js";
import TourList from "./components/TourList/TourList";
library.add(fab, faWindowClose, faCaretSquareDown);

function App() {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
