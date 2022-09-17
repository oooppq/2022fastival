import React, { useState } from "react";
import { schedules } from "../data";
// import Modal from "./Modal";
import { DayContainerDiv, MainScheduleDiv, ScheduleContainerDIv, ScheduleSpan, Scheduleimg, ScheduleimgBox, Schedulenametag } from "../styledComponent";
import { ScheduleComponentDiv } from "./Elements";
import {
  dayConverter,
  pushDayDiv,
  dayOnClick,
  getDefaultDay,
  pushData,
  findData,
} from "../utils";

// default로 설정할 요일을 지정
let defaultDay = getDefaultDay();

const Schedule = () => {
  // 요일 선택을 반영하기 위해 useState로 구현
  //defaultDay를 하면 아무것도 안나와서 기본값을 1로 조정
  const [selectedDay, setSelectedDay] = useState(dayConverter(1));
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
  return (
    <MainScheduleDiv>
      <DayContainerDiv>
        {/* 요일을 추가, onclick event는 parameter 전달을 위해 화살표 함수로 구현 */}
        {pushDayDiv(selectedDay, (e) => {
          dayOnClick(setSelectedDay, e);
        })}
      </DayContainerDiv>
      <ScheduleContainerDIv>
        <ScheduleSpan>Performance Schedule</ScheduleSpan>
      </ScheduleContainerDIv>
      {/* 데이터 추가 */}

      
      {/* {showModal && (
        <Modal
          setShowModal={setShowModal}
          data={findData(schedules, selectedID)}
        ></Modal>
      )} */}


       {pushData(
        schedules,
        ScheduleComponentDiv,
        selectedDay,
        setShowModal,
        setSelectedID,
      )}
    </MainScheduleDiv>
  );
};

export default Schedule;
