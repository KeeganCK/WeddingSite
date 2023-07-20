import React from "react";
import { SectionDiv } from "./RSVP";
import { StyledPlant, TitleP } from "./Wedding";
import { MusicDescriptionAddP } from "./Music";
import { Button } from "antd";
import "./RSVP.css";
import { styled } from "styled-components";

export const TravelDescriptionP = styled.p`
  font-size: 16px;
  margin: 0 0 10px 0;
  text-align: center;
  /* font-weight: bold; */
  width: 70%;
`;

const Travel = () => {
  return (
    <SectionDiv id="travel" color={true}>
      <TitleP>TRAVEL</TitleP>
      <StyledPlant />
      <MusicDescriptionAddP>
        Fly into Rafael Núñez International Airport
      </MusicDescriptionAddP>
      <a
        href="https://www.google.com/travel/flights?tfs=CBwQARojEgoyMDIzLTA4LTA0agwIAhIIL20vMDd5cHRyBwgBEgNDVEcaIxIKMjAyMy0wOC0wOGoHCAESA0NUR3IMCAISCC9tLzA3eXB0QAFIAXABggELCP___________wGYAQE"
        target="_blank"
      >
        <Button type="primary">Find a flight</Button>
      </a>
    </SectionDiv>
  );
};

export default Travel;
