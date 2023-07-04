import React from "react";
import { SectionDiv } from "./RSVP";
import CountdownTime from "./CountdownTime";

const HomePage = () => {
  return (
    <SectionDiv id="home" color={false}>
      <h4>Time until Wedding</h4>
      <CountdownTime countdownTimestampMs="2024-05-02T16:00"/>
    </SectionDiv>
  );
};

export default HomePage;
