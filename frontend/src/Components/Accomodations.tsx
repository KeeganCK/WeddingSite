import React, { useState } from "react";
import { CustomSearch, EmailDiv, RSVPDiv, SectionDiv } from "./RSVP";
import { StyledPlant, TitleP } from "./Wedding";
import { MusicDescriptionP } from "./Music";
import styled from "styled-components";
import { notification, Form, Select, Button } from "antd";

export const AccDescriptionP = styled.p`
  font-size: 20px;
  margin: 0 0 10px 0;
  text-align: center;
  /* font-weight: bold; */
`;

const Accomodations = () => {
  const [email, setEmail] = useState<string>("");
  const [emailLoading, setEmailLoading] = useState<boolean>(false);

  const [api, contextHolder] = notification.useNotification();

  const findEmail = async (value: string) => {
    try {
      setEmailLoading(true);
      if (!value) {
        throw new Error("Need to enter an Email");
      }
      const response = await fetch(
        `https://mandkwedding-4c8008d201f3.herokuapp.com/api/checkEmailMoney/${value}`
      );
      const responseData = await response.json();
      //If reponse not good, throw an error
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setEmail(responseData.email);
      setEmailLoading(false);
      showNotification(responseData.message);
    } catch (err: any) {
      api.error({
        message: err.message,
        placement: "top",
      });
      setEmailLoading(false);
    }
  };

  const showNotification = (message: string) => {
    api.success({
      message: message,
      placement: "top",
    });
  };

  return (
    <SectionDiv id="accomodations" color={false}>
      {contextHolder}
      <TitleP>ACCOMODATIONS</TitleP>
      <StyledPlant />
      <RSVPDiv>
        {!email ? (
          <EmailDiv>
            <AccDescriptionP>
              To see the accomodation information please start by entering your
              email.{" "}
            </AccDescriptionP>
            <CustomSearch
              loading={emailLoading}
              enterButton="Check Email"
              onSearch={findEmail}
              placeholder="Please only use the email that the invitation was sent to"
            />
          </EmailDiv>
        ) : (
          <>
            <AccDescriptionP>
              Link to Hotel:{" "}
              <a href="https://www.coralesdeindias.com/" target="_blank">
                GHL Relax Corales de Indias Hotel
              </a>
            </AccDescriptionP>
            <AccDescriptionP>
              Room style: Standard size (2 separate double beds with balcony
              overlooking the ocean).
            </AccDescriptionP>
            <AccDescriptionP>
              The cost of a standard sized hotel room is $100 CAD per night.
              This group rating is from April 28th to May 4th, 2024 (total of 6
              nights). This includes breakfast and access to all hotel amenities
              (gym, pool, wifi, etc.). The total cost for the stay will be $600
              and the hotel requires us to place a deposit of 40% to reserve
              each room.
            </AccDescriptionP>
            <AccDescriptionP>
              Note: The above cost is for two people staying in the room. For
              each additional person (max. of 4 people per room) it is an additional
              $40/individual.
            </AccDescriptionP>
            <AccDescriptionP>
              <strong>
                To reserve your hotel room, please e-transfer $240 (CAD) to{" "}
                {email} by October 15th, 2023.{" "}
              </strong>
            </AccDescriptionP>
            <br />
            <hr />
            <br />
            <AccDescriptionP> Informacion en Español:</AccDescriptionP>
            <AccDescriptionP>
              Hotel:{" "}
              <a href="https://www.coralesdeindias.com/" target="_blank">
                GHL Relax Corales de Indias Hotel
              </a>
            </AccDescriptionP>
            <AccDescriptionP>
              Estilo de habitación: Tamaño estándar (2 camas doble con balcón
              con vista al mar).
            </AccDescriptionP>
            <AccDescriptionP>
              El costo por cuarto estándar es de $100 Canadiense ($310,000 COL)
              por noche. Esta tarifa de grupo es para 6 noches, de Abril 28 asta
              el 4 de mayo de 2024. Esto incluye desayuno y acceso a todos los
              servicios del hotel (gimnasio, piscina, wifi, etc.). El costo total
              para la estadía será de $600 Canadiense ($55,800,000 COL) y el
              hotel requiere que coloquemos un depósito del 40% para reservar
              cada habitación.
            </AccDescriptionP>
            <AccDescriptionP>
              Nota: El costo anterior es para dos personas alojadas en la
              habitación. Por cada persona adicional (máximo 4 personas por habitación)
              se cobran $40 adicionales por persona.
            </AccDescriptionP>
            <AccDescriptionP>
              <strong>
                Para reservar su habitación, por favor realice una transferencia
                electrónica de $240 (CAD) a {email} antes de October 15th, 2023.
                Si no puede enviar transferencias electrónicas, por favor
                contáctenos y resolveremos algo.
              </strong>
            </AccDescriptionP>
          </>
        )}
      </RSVPDiv>
    </SectionDiv>
  );
};

export default Accomodations;
