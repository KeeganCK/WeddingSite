import React from "react";
import styled from "styled-components";

interface SectionDivProps {
	color: boolean;
}
export const SectionDiv = styled.div<SectionDivProps>`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.color ? '#B2BDA0' : '#EBEFE3'};
	padding-top: 80px;
`;

const RSVP = () => {
  return <SectionDiv id="RSVP" color={false}>RSVP--------</SectionDiv>;
};

export default RSVP;
