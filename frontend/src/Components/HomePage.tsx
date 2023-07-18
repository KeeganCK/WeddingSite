import React, { useEffect, useState } from "react";
import { SectionDiv } from "./RSVP";
import CountdownTime from "./CountdownTime";
import HomeSvg from "../svgComponents/HomeSvg";
import { renderToStaticMarkup } from 'react-dom/server';
import BackgroundSvg from "../svgComponents/BackgroundSvg";

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const HomePage = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const svgString = encodeURIComponent(renderToStaticMarkup(<BackgroundSvg />));
  return (
    <SectionDiv id="home" color={false} background={svgString}>
      <HomeSvg width={windowDimensions.width > 800 ? "700" : "300"} height={windowDimensions.width > 800 ? (700/1.77).toString() : (300/1.77).toString()}/>
      <CountdownTime countdownTimestampMs="2024-05-02T13:00"/>
    </SectionDiv>
  );
};

export default HomePage;
