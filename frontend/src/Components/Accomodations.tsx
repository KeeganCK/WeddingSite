import React from "react";
import { RSVPDiv, SectionDiv } from "./RSVP";
import { StyledPlant, TitleP } from "./Wedding";
import { MusicDescriptionP } from "./Music";
import styled from "styled-components";

export const AccDescriptionP = styled.p`
  font-size: 20px;
  margin: 0 0 10px 0;
  text-align: center;
  font-weight: bold;
`;

const Accomodations = () => {
  return (
    <SectionDiv id="accomodations" color={true}>
      <TitleP>ACCOMODATIONS</TitleP>
      <StyledPlant />
      <RSVPDiv>
        <AccDescriptionP>
          We are currently in the process of finding group rates for
          accomodations. Once we have an estimate of how many people are
          attending, we will post the accomodation options to this page. Please
          RSVP as soon as you can!{" "}
        </AccDescriptionP>
        {/* <AccDescriptionP>
          We will be receiving group rates for a total of 5 nights (April 29th
          to May 4th) - If you plan on staying for longer in Colombia, and would
          like to stay at the same place, please email us by October 1st and
          specify your dates.
        </AccDescriptionP> */}
      </RSVPDiv>
    </SectionDiv>
  );
};

export default Accomodations;
