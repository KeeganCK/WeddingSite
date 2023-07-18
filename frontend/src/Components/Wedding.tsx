import React, { useState, useEffect } from "react";
import { SectionDiv } from "./RSVP";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import WeddingSvg from "../svgComponents/WeddingSvg";
import { getWindowDimensions } from "./HomePage";
import { Timeline } from "antd";
import { BiSolidDrink, BiSolidHomeHeart, BiSolidArch } from "react-icons/bi";
import { GiPartyPopper } from "react-icons/gi";
import "./TimeLine.css";
import { styled } from "styled-components";

const LocationP = styled.p`
  font-size: 18px;
`;

const Wedding = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SectionDiv color={true} id="wedding">
      <WeddingSvg
        width={windowDimensions.width > 800 ? "500" : "300"}
        height={
          windowDimensions.width > 800
            ? (500 / 1.77).toString()
            : (300 / 1.77).toString()
        }
      />
      <AddToCalendarButton
        name="Milena and Keegan's Wedding in Colombia"
        startDate="2024-05-02"
        options={["Apple", "Google", "Outlook.com"]}
        size={"3"}
        lightMode="light"
        trigger="click"
        buttonStyle="round"
      ></AddToCalendarButton>
      <p style={{ margin: "0", fontSize: "26px" }}>
        The Wedding will take place on May 2nd 2024
      </p>
      <LocationP>Location: Casa Cordoba Cabal, Cartagena, Colombia</LocationP>
      <br />
      <Timeline
        items={[
          {
            color: "black",
            dot: <BiSolidHomeHeart />,
            children: (
              <>
                <h5 style={{ margin: "0" }}>4 pm</h5>
                <p style={{ margin: "0" }}>Arrive at wedding venue</p>
              </>
            ),
          },
          {
            color: "black",
            dot: <BiSolidArch />,
            children: (
              <>
                <h5 style={{ margin: "0" }}>5 pm</h5>
                <p style={{ margin: "0" }}>Ceremony</p>
              </>
            ),
          },
          {
            color: "black",
            dot: <BiSolidDrink />,
            children: (
              <>
                <h5 style={{ margin: "0" }}>6 pm</h5>
                <p style={{ margin: "0" }}>Cocktails</p>
              </>
            ),
          },
          {
            color: "black",
            dot: <GiPartyPopper />,
            children: (
              <>
                <h5 style={{ margin: "0" }}>7 pm</h5>
                <p style={{ margin: "0" }}>Reception</p>
              </>
            ),
          },
        ]}
      />
    </SectionDiv>
  );
};

export default Wedding;
