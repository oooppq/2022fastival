import {
  MainDiv,
  DdayDiv,
  DdayTitle,
  DdayTimer,
  EventContainerDiv,
  EventSpan,
} from "../styledComponent";
import React from "react";

import Event from "./Event";
import { events } from "../data";

// 이벤트 data 불러오기,
const getEvents = (events) => {
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
      {/* d-day 요소들 */}
      <DdayDiv>
        <DdayTitle>D-day</DdayTitle>
        <DdayTimer>00:00:00</DdayTimer>
      </DdayDiv>

      {/* event 요소들 */}
      <EventContainerDiv>
        <EventSpan>
          진행중인 <span>이벤트</span>
        </EventSpan>
        {/* data.js에 저장된 event들 로딩 */}
        {getEvents(events)}
      </EventContainerDiv>
    </MainDiv>
  );
};
export default Home;
