import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import RSVP from "./Components/RSVP";
import ScrollToHashElement from "./Components/ScrollToHashElement";
import HomePage from "./Components/HomePage";
import Travel from "./Components/Travel";
import Accomodations from "./Components/Accomodations";
import PreWedding from "./Components/PreWedding";
import Activities from "./Components/Activities";
import Music from "./Components/Music";
import FAQ from "./Components/FAQ";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToHashElement />
      <HomePage />
      <RSVP />
      <Travel />
      <Accomodations />
      <PreWedding />
      <Activities />
      <Music />
      <FAQ />
    </div>
  );
}

export default App;
