import React from "react";
import { SectionDiv } from "./RSVP";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { getWindowDimensions } from "./HomePage";
import { Timeline } from "antd";
import { BiSolidDrink, BiSolidHomeHeart, BiSolidArch } from "react-icons/bi";
import { GiPartyPopper } from "react-icons/gi";
import "./TimeLine.css";
import { styled } from "styled-components";
import { PiPlantThin } from "react-icons/pi";


const LocationP = styled.p`
  font-size: 22px;
  @media(max-width: 800px) {
    font-size: 16px;
  }
`;

export const TitleP = styled.p`
  margin: 65px 0 0 0;
  font-size: 104px;
  font-family: "DreamAvenue";
  font-style: italic;
  @media(max-width: 900px) {
    font-size: 72px;
  }
  @media(max-width: 600px) {
    font-size: 48px;
  }
`;

const WeddingInfoP = styled.p`
  margin: 0;
  font-size: 28px;
  @media(max-width: 800px) {
    font-size: 18px;
  }
`

export const StyledPlant = styled(PiPlantThin)`
  margin: 0 0 20px 0;
  font-size: 52px;
`

const Wedding = () => {
  return (
    <SectionDiv color={true} id="wedding">
      <TitleP>WEDDING</TitleP>
      <StyledPlant />
      <WeddingInfoP>
        The Wedding will take place on May 2nd 2024
      </WeddingInfoP>
      <LocationP>Casa Cordoba Cabal, Cartagena, Colombia</LocationP>
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
      <AddToCalendarButton
        name="Milena and Keegan's Wedding in Colombia"
        startDate="2024-05-02"
        options={["Apple", "Google", "Outlook.com"]}
        size={"2"}
        lightMode="dark"
        trigger="click"
      ></AddToCalendarButton>
    </SectionDiv>
  );
};

export default Wedding;
