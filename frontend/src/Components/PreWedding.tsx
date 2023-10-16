import React from "react";
import { RSVPDiv, SectionDiv } from "./RSVP";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { StyledPlant, TitleP } from "./Wedding";
import { AccDescriptionP } from "./Accomodations";

const PreWedding = () => {
  return (
    <SectionDiv id="preWedding" color={false}>
      <TitleP>PRE-WEDDING</TitleP>
      <StyledPlant />
      <RSVPDiv>
        <AccDescriptionP>
          There will be a welcome event in Cartagena on April 30th 2024, two days before the wedding.
          More details on the specifics of the event will be coming soon.
        </AccDescriptionP>
        <AccDescriptionP>
          If you think that you will be able to make it to the welcome event,
          please specify this when you RSVP so that we know
          approximate numbers.
        </AccDescriptionP>
      </RSVPDiv>
      <AddToCalendarButton
        name="Keegan and Milenas Pre-Wedding Event"
        startDate="2024-05-01"
        options={["Apple", "Google", "Outlook.com"]}
        size={"2"}
        lightMode="dark"
        trigger="click"
      ></AddToCalendarButton>
    </SectionDiv>
  );
};

export default PreWedding;
