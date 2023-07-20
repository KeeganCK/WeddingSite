import React from "react";
import { RSVPDiv, SectionDiv } from "./RSVP";
import { StyledPlant, TitleP } from "./Wedding";
import { AccDescriptionP } from "./Accomodations";

const Activities = () => {
  return (
    <SectionDiv id="activities" color={false}>
      <TitleP>ACTIVITIES</TitleP>
      <StyledPlant />
      <RSVPDiv>
        <AccDescriptionP>
          We are putting together a list of activites that you can do in
          Cartagena so that you can enjoy Colombia as much as possible! Different options
          will be posted to this page closer to the wedding date.{" "}
        </AccDescriptionP>
      </RSVPDiv>
    </SectionDiv>
  );
};

export default Activities;
