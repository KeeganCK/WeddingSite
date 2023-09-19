import React from "react";
import { RSVPDiv, SectionDiv } from "./RSVP";
import { StyledPlant, TitleP } from "./Wedding";
import { AccDescriptionP } from "./Accomodations";
import styled from "styled-components";

const ActivityContainer = styled.div`
  display: grid;
  grid-template-colums: 1fr 1fr 1fr;
`;

const ActivityCardDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  padding: 25px 25px 15px 25px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Activities = () => {
  return (
    <SectionDiv id="activities" color={false}>
      <TitleP>ACTIVITIES</TitleP>
      <StyledPlant />
      <RSVPDiv>
        <AccDescriptionP>
          We are putting together a list of activites that you can do in
          Cartagena so that you can enjoy Colombia as much as possible!
          Different options will be posted to this page closer to the wedding
          date.{" "}
        </AccDescriptionP>
        {/* <ActivityContainer>
          <ActivityCardDiv>
            Something in here
          </ActivityCardDiv>
          <ActivityCardDiv>
            Something in here
          </ActivityCardDiv>
          <ActivityCardDiv>
            Something in here
          </ActivityCardDiv>
        </ActivityContainer> */}
      </RSVPDiv>
    </SectionDiv>
  );
};

export default Activities;
