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
import "./App.css";
import Wedding from "./Components/Wedding";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToHashElement />
      <HomePage />
      <Wedding />
      <Accomodations />
      <Travel />
      <PreWedding />
      <Music />
      <Activities />
      <FAQ />
      <RSVP />
    </div>
  );
}

export default App;
