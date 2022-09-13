import {
  MainDiv,
  DdayDiv,
  DdayTitle,
  DdayTimer,
  EventContainerDiv,
  EventSpan,
} from "../styledComponent";
import React from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
import Event from "./Event";
import { events } from "../data";

const getData = (events) => {
  const results = [];
  let i = 0;
  for (let event of events) {
    results.push(<Event key={i} title={event.title} date={event.date}></Event>);
    i++;
  }
  return results;
};

const Home = () => {
  return (
    <MainDiv>
      <DdayDiv>
        <DdayTitle>D-day</DdayTitle>
        <DdayTimer>00:00:00</DdayTimer>
      </DdayDiv>
      <EventContainerDiv>
        <EventSpan>
          진행중인 <span>이벤트</span>
        </EventSpan>

        {getData(events)}
      </EventContainerDiv>
    </MainDiv>
  );
};
export default Home;
