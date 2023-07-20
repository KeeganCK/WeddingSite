import React from 'react'
import { SectionDiv } from './RSVP'
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { StyledPlant, TitleP } from './Wedding';

const PreWedding = () => {
  return (
    <SectionDiv id="preWedding" color={false}>
      <TitleP>PRE-WEDDING</TitleP>
      <StyledPlant />
      <h4>The Pre-Wedding Event will take place on May 1st 2024</h4>
      <AddToCalendarButton
        name="Keegan and Milenas Pre-Wedding Event"
        startDate="2024-05-01"
        options={["Apple", "Google", "Outlook.com"]}
        size={"2"}
        lightMode="dark"
        trigger="click"
      ></AddToCalendarButton>
    </SectionDiv>
  )
}

export default PreWedding