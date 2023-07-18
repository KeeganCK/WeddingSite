import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";

const RemainingTimeDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const TimeDiv = styled.div`
  display: flex;
  flex-direction: column;
	margin: 0 5px;
	align-items: center;
	border: 1px solid #8D9E6F;
	border-radius: 10px;
	padding: 5px;
	width: 60px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media(max-width: 800px) {
    width: 40px;
  }
`;

const TimeNumberSpan = styled.span`
	font-weight: 700;
	font-size: 24px;
	font-family: 'Great Vibes', cursive;
  @media(max-width: 800px) {
    font-size: 20px;
  }
`;

const TimeWordSpan = styled.span`
@media(max-width: 800px) {
    font-size: 12px;
  }
`;

interface remainingTimeProps {
  seconds: string;
  minutes: string;
  hours: string;
  days: string;
}

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTime = (props: { countdownTimestampMs: string }) => {
  const [remainingTime, setRemainingTime] =
    useState<remainingTimeProps>(defaultRemainingTime);

	const getString = (number: number): string => {
		if(number.toString().length < 2) {
			return "0" + number.toString();
		}
		return number.toString();
	}

  const updateRemainingTime = (countdown: string) => {
    const timestampDayjs = dayjs(countdown);
    const nowDayjs = dayjs();

    if (timestampDayjs.isBefore(nowDayjs)) {
      setRemainingTime(defaultRemainingTime);
    } else {
      const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
      const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
      const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
      const days = timestampDayjs.diff(nowDayjs, "days");
      setRemainingTime({
        seconds: getString(seconds),
        minutes: getString(minutes),
        hours: getString(hours),
        days: days.toString(),
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(props.countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [props.countdownTimestampMs]);

  return (
    <RemainingTimeDiv>
      <TimeDiv>
        <TimeNumberSpan>{remainingTime.days}</TimeNumberSpan>
        <TimeWordSpan>days</TimeWordSpan>
      </TimeDiv>
      <TimeDiv>
        <TimeNumberSpan>{remainingTime.hours}</TimeNumberSpan>
        <TimeWordSpan>hours</TimeWordSpan>
      </TimeDiv>
      <TimeDiv>
        <TimeNumberSpan>{remainingTime.minutes}</TimeNumberSpan>
        <TimeWordSpan>minutes</TimeWordSpan>
      </TimeDiv>
      <TimeDiv>
        <TimeNumberSpan>{remainingTime.seconds}</TimeNumberSpan>
        <TimeWordSpan>seconds</TimeWordSpan>
      </TimeDiv>
    </RemainingTimeDiv>
  );
};

export default CountdownTime;
