import {
  MainDiv,
  DdayDiv,
  EventContainerDiv,
  EventSpan,
  BlackBg,
} from "../styledComponent";
import React, { useState } from "react";
import { events } from "../data";
import EventItem from "./EventItem";
import { pushData, findData, Timer } from "../utils";
import { EventComponentDiv } from "./Elements";
// 이벤트 data 불러오기,

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);

  return (
    <MainDiv>
      <BlackBg />
      {/* d-day 요소들 */}
      <DdayDiv>
        <Timer />
      </DdayDiv>

      {/* event 요소들 */}
      <EventContainerDiv>
        <EventSpan>
          진행중인 <span>이벤트</span>
        </EventSpan>
        {/* data.js에 저장된 event들 로딩 */}
        {events.map((event) => {
          return <EventItem key={event.id} {...event} />;
        })}
      </EventContainerDiv>
    </MainDiv>
  );
};
export default Home;
