import React from "react";
import styled from "styled-components";

interface SectionDivProps {
	color: string;
}
export const SectionDiv = styled.div<SectionDivProps>`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.color};
	padding-top: 64px;
`;

const RSVP = () => {
  return <SectionDiv id="RSVP" color={'#B2BDA0'}>RSVP--------</SectionDiv>;
};

export default RSVP;
