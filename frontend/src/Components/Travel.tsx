import React, { useState, useEffect } from "react";
import { SectionDiv } from "./RSVP";
import TravelSvg from "../svgComponents/TravelSvg";
import { getWindowDimensions } from "./HomePage";

const Travel = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <SectionDiv id="travel" color={false}>
      <TravelSvg
        width={windowDimensions.width > 800 ? "500" : "300"}
        height={
          windowDimensions.width > 800
            ? (500 / 1.77).toString()
            : (300 / 1.77).toString()
        }
      />
    </SectionDiv>
  );
};

export default Travel;
