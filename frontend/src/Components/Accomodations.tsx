import React from "react";
import { RSVPDiv, SectionDiv } from "./RSVP";
import { StyledPlant, TitleP } from "./Wedding";
import { MusicDescriptionP } from "./Music";
import styled from "styled-components";

export const AccDescriptionP = styled.p`
  font-size: 20px;
  margin: 0 0 10px 0;
  text-align: center;
  /* font-weight: bold; */
`;

const Accomodations = () => {
  return (
    <SectionDiv id="accomodations" color={false}>
      <TitleP>ACCOMODATIONS</TitleP>
      <StyledPlant />
      <RSVPDiv>
        <AccDescriptionP>
          We are currently in the process of finding group rates for
          accomodations for a total of 7 nights (April 28th, 2024 to May 5th,
          2024). We are hoping to keep the accomodation rates between
          $50-100CAD/night per room. Once we have an estimate of how many people
          are attending, we will post the accomodation options to this page.{" "}
        </AccDescriptionP>
        <AccDescriptionP>Please RSVP as soon as you can! </AccDescriptionP>
      </RSVPDiv>
    </SectionDiv>
  );
};

export default Accomodations;
