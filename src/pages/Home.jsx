import {
  MainDiv,
  DdayDiv,
  DdayTitle,
  DdayTimer,
  EventContainerDiv,
  EventSpan,
} from "../styledComponent";
import React, { useState } from "react";
import Modal from "./Modal";
import { events } from "../data";
import { pushData, findData } from "../utils";
import { EventComponentDiv } from "./Elements";
// 이벤트 data 불러오기,

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
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
        {pushData(events, EventComponentDiv, "", setShowModal, setSelectedID)}
      </EventContainerDiv>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          data={findData(events, selectedID)}
        ></Modal>
      )}
    </MainDiv>
  );
};
export default Home;
