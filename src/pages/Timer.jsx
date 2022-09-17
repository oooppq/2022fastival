import React from "react";
import { useState, useEffect } from "react";
import afterDue from "../images/home/afterDue.png";

const Timer = () => {
  const [timeState, setTimeState] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 1,
  });

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };
  const getTimeUntil = () => {
    const dueDay = new Date("2022-09-19");
    const currentTime = new Date();
    const koreaTimeDiff = 9 * 60 * 60 * 1000;
    const time = dueDay - currentTime - koreaTimeDiff;
    if (time < 0) {
      setTimeState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
      });
      clearInterval();
    } else {
      const diffDay = Math.floor(time / (1000 * 60 * 60 * 24));
      const diffHour = Math.floor((time / (1000 * 60 * 60)) % 24);
      const diffMin = Math.floor((time / 1000 / 60) % 60);
      const diffSec = Math.floor((time / 1000) % 60);
      setTimeState({
        days: diffDay,
        hours: diffHour,
        mins: diffMin,
        secs: diffSec,
      });
    }
  };
  useEffect(() => {
    setInterval(() => getTimeUntil(), 1000);

    return () => getTimeUntil();
  }, []);

  const sumTime =
    timeState.days + timeState.hours + timeState.mins + timeState.secs;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: "3",
      }}
    >
      {sumTime <= 0 ? (
        <div style={{ marginRight: "80px" }}>
          <img src={afterDue} style={{ width: "300px" }} alt="due"></img>
        </div>
      ) : (
        <></>
      )}
      <div style={{ marginTop: "5px" }}>
        {sumTime > 0 ? (
          <div style={{ fontSize: "70px" }}>{`D-${timeState.days}`}</div>
        ) : (
          <></>
        )}
        <div style={{ fontSize: "30px" }}>
          {leading0(timeState.hours)}:{leading0(timeState.mins)}:
          {leading0(timeState.secs)}
        </div>
      </div>
    </div>
  );
};

export default Timer;
