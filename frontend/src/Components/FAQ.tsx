import React from "react";
import { SectionDiv } from "./RSVP";
import { TitleP, StyledPlant } from "./Wedding";
import { styled } from "styled-components";

const FAQCardDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  padding: 25px 25px 15px 25px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 66%;
`;

const QuestionP = styled.p`
  font-size: 22px;
  margin: 0 0 10px 0;
  text-align: center;
  font-weight: bold;
`;

const AnswerP = styled.p`
  font-size: 19px;
  margin: 0 0 20px 0;
  text-align: center;
  font-family: "Ysabeau Infant", sans-serif !important;
`;

const FAQ = () => {
  return (
    <SectionDiv id="faq" color={true}>
      <TitleP>FAQ</TitleP>
      <StyledPlant />
      <FAQCardDiv>
        <QuestionP>CAN I BRING A GUEST?</QuestionP>
        <AnswerP>
          Due to limited capacity, we can only accommodate the people named on
          your invitation. Your invitation will be made out to "{"{Your Name}"}{" "}
          & {"{Guest Name}"}". If we do not know the name of your guest, your
          invitation will be made out to "{"{Your name}"} & Guest" if a plus one
          has been given to you.{" "}
        </AnswerP>
        <QuestionP>ARE KIDS INVITED?</QuestionP>
        <AnswerP>
          Due to limited capacity, we can only accomodate children that are
          named on your invitation. Your invitation will be made out to "
          {"{Your Name}"}, {"{Spouse Name}"} & {"{Children/s Name}"}" if your
          children have been invited.{" "}
        </AnswerP>
        <QuestionP>
          WILL THE WEDDING BE TAKING PLACE OUTSIDE OR INSIDE?
        </QuestionP>
        <AnswerP>
          The ceremony will be taking place outside but the reception will be
          indoors where there is air conditioning.{" "}
        </AnswerP>
        <QuestionP>WHAT SHOULD I WEAR TO THE WEDDING?</QuestionP>
        <AnswerP>
          We would love to see our family and friends get dressed up with us! We
          are requesting a semi-formal dress attire at our wedding. Please
          remember that you will be in Colombia, which is HOT, so wear clothes
          that are breathable!{" "}
        </AnswerP>
        <QuestionP>WHAT SHOULD I DO IF I CAN'T MAKE IT?</QuestionP>
        <AnswerP>
          You will be missed! If you can not make it to the wedding, please let
          us know as soon as possible and RSVP "No" so we can plan accordingly.
        </AnswerP>
        <QuestionP>
          WILL TRANSPORTATION BE PROVIDED?
        </QuestionP>
        <AnswerP>
          There will be transportation provided on the day of the wedding.
          However, there will be no transportation provided from the airport to
          the hotel. Taxi's are the easiest form of transportation throughout Cartagena!{" "}
        </AnswerP>
        <QuestionP>
          I STILL HAVE QUESTIONS, WHAT IS THE BEST WAY TO CONTACT YOU?
        </QuestionP>
        <AnswerP>
          Please send any wedding-related questions to <a href="mailto: Milena%20and%20Keegan<milaandkeegs_wedding@outlook.com>">this email</a>!{" "}
        </AnswerP>
      </FAQCardDiv>
    </SectionDiv>
  );
};

export default FAQ;
