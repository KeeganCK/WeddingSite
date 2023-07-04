import React from "react";
import { SectionDiv } from "./RSVP";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const Wedding = () => {
  return (
    <SectionDiv color={true} id="wedding">
      <h4>Wedding takes place on the 2nd of May 2024 to the 3rd of May 2024</h4>
      <AddToCalendarButton
        name="Keegan and Milenas Wedding"
        startDate="2024-05-02"
        endDate="2024-05-03"
        options={["Apple", "Google", "Outlook.com"]}
        size={"3"}
        lightMode="light"
        trigger="click"
        buttonStyle="round"
      ></AddToCalendarButton>
    </SectionDiv>
  );
};

export default Wedding;
