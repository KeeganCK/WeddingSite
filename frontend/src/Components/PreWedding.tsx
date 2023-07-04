import React from 'react'
import { SectionDiv } from './RSVP'
import { AddToCalendarButton } from "add-to-calendar-button-react";

const PreWedding = () => {
  return (
    <SectionDiv id="preWedding" color={false}>
      <h4>Pre-Wedding Event takes place on May 1st 2024</h4>
      <AddToCalendarButton
        name="Keegan and Milenas Pre-Wedding Event"
        startDate="2024-05-01"
        options={["Apple", "Google", "Outlook.com"]}
        size={"3"}
        lightMode="light"
        trigger="click"
        buttonStyle="round"
      ></AddToCalendarButton>
    </SectionDiv>
  )
}

export default PreWedding