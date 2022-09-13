import React, { useState } from "react";
import { dayConverter, schedules } from "../data";
import { DayContainerDiv, DayDiv } from "../styledComponent";

let today = new Date().getDay();
let defaultDay = today > 2 ? today : 2;

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(dayConverter(defaultDay));
  const dayOnClick = (e) => {
    setSelectedDay(e.target.innerHTML);
    let days = e.target.parentNode.childNodes;
    for (let d of days) {
      if (d === e.target) {
        d.style.color = "red";
      } else {
        d.style.color = "black";
      }
    }
  };

  const getSchedules = () => {
    let scheduleList = [];
    let i = 0;
    for (let schedule of schedules) {
      if (dayConverter(schedule.day) === selectedDay) {
        scheduleList.push(<div key={i}>{schedule.name}</div>);
        i++;
      }
    }
    let days = document.querySelectorAll(".day");

    for (let day of days) {
      if (day.innerHTML === selectedDay) {
        day.style.color = "red";
      }
    }
    return scheduleList;
  };

  const pushDayDiv = () => {
    let dayList = ["월", "화", "수", "목", "금"];
    let result = [];
    let i = 0;
    for (let day of dayList) {
      if (day === selectedDay) {
        result.push(
          <DayDiv
            style={{ color: "red" }}
            className="day"
            key={i}
            onClick={dayOnClick}
          >
            {day}
          </DayDiv>
        );
      } else {
        result.push(
          <DayDiv className="day" key={i} onClick={dayOnClick}>
            {day}
          </DayDiv>
        );
      }
      i++;
    }
    return result;
  };

  return (
    <>
      <DayContainerDiv>
        {pushDayDiv()}
        {/* <DayDiv className="day" onClick={dayOnClick}>
          월
        </DayDiv>
        <DayDiv className="day" onClick={dayOnClick}>
          화
        </DayDiv>
        <DayDiv className="day" onClick={dayOnClick}>
          수
        </DayDiv>
        <DayDiv className="day" onClick={dayOnClick}>
          목
        </DayDiv>
        <DayDiv className="day" onClick={dayOnClick}>
          금
        </DayDiv> */}
      </DayContainerDiv>

      {getSchedules()}
    </>
  );
};

export default Schedule;
