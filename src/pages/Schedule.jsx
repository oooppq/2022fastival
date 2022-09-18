import React, { useState } from "react";
import { schedules } from "../data";
// import Modal from "./Modal";
import {
  DayContainerDiv,
  MainScheduleDiv,
  ScheduleContainerDIv,
  ScheduleSpan,
  Scheduleimg,
  ScheduleimgBox,
  Schedulenametag,
  TeamBlock,
  TeamName,
  RoundImgContainer,
  SquareImgContainer,
} from "../styledComponent";
import { ScheduleComponentDiv } from "./Elements";
import { useScrollToCG, useScrollToDW } from "../useScroll";
import {
  dayConverter,
  pushDayDiv,
  dayOnClick,
  getDefaultDay,
  pushData,
  findData,
} from "../utils";
import redHand from "../images/redHand.png";
import backgroundImage from "../images/background.png";
import { useEffect } from "react";
import styled from "styled-components";
import bloodStain from "../images/blood5.png";

// default로 설정할 요일을 지정
let defaultDay = getDefaultDay();

const CgBoxStyle = styled.div`
  div {
    font-size: 20px;
    margin-bottom: 50px;
  }
  .title {
    font-size: 40px;
    margin: 10px;
  }
`;
const DwBoxStyle = styled.div`
  .title {
    font-size: 32px;
    margin: 10px;
  }
  .timeBox {
    margin-bottom: 50px;
    .time {
      color: #620303;
      font-size: 28px;
      font-weight: 300;
    }
  }

  .bigContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .name {
      font-size: 20px;
    }
  }
`;

const Schedule = () => {
  // 요일 선택을 반영하기 위해 useState로 구현
  //defaultDay를 하면 아무것도 안나와서 기본값을 1로 조정
  const { scrollToCG, onMoveToCG } = useScrollToCG();
  const { scrollToDW, onMoveToDW } = useScrollToDW();
  const [selectedDay, setSelectedDay] = useState(dayConverter(1));
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
  const [CgData, setCgData] = useState([]);
  const [DwData, setDwData] = useState([]);
  const [monArrData, setMonArrData] = useState("");

  const dayData = schedules.filter(
    (item) => dayConverter(item.day) === selectedDay
  );

  const setNewData = () => {
    const CGData = dayData.filter((item) => item.place === "청년광장");
    setCgData(CGData);
    const DWArray = dayData.filter((item) => item.place === "대운동장");
    const MonArr = dayData.filter(
      (item) => item.place === "청년광장 기청제"
    )[0];
    setMonArrData(MonArr);

    const DWData = [
      ["쉬는시간"],
      ["16:00-20:00"],
      ["18:00-19:00"],
      ["19:00-21:00"],
      ["20:05-20:35"],
      ["21:00-22:00"],
      ["20:35-23:00"],
    ];

    if (DWArray) {
      DWArray.forEach((item) => {
        switch (item.time) {
          case "쉬는시간":
            DWData[0].push(item);
            break;
          case "16:00-20:00":
            DWData[1].push(item);
            break;
          case "18:00-19:00":
            DWData[2].push(item);
            break;
          case "19:00-21:00":
            DWData[3].push(item);
            break;
          case "20:05-20:35":
            DWData[4].push(item);
            break;
          case "21:00-22:00":
            DWData[5].push(item);
            break;
          case "20:35-23:00":
            DWData[6].push(item);
            break;
          default:
            break;
        }
      });
      setDwData(DWData);
    }
  };

  const CgBoxList = CgData.map((item) => {
    return (
      <div className="CgItem" key={item.id}>
        {item.name}
      </div>
    );
  });
  const DwBoxList = DwData.map((item, i) => {
    const roundBlocks = item.map((team, i) => {
      if (i === 0) {
        return "";
      }
      return (
        <TeamBlock key={team.id} even={i % 2 === 0}>
          <RoundImgContainer height="150px">
            <img
              src={require(`../images/schedule/${team.backgroundImage}`)}
              alt="img"
            />
          </RoundImgContainer>
          <div>
            <img className="handImg" src={redHand} alt="a" />
            <div style={{ position: "relative" }}>
              <img
                src={bloodStain}
                style={{ position: "absolute", top: "20px", left: "25px" }}
              ></img>
              {team.id % 2 === 0 ? (
                <img
                  src={bloodStain}
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "30px",
                    transform: "rotate(-45deg)",
                  }}
                ></img>
              ) : (
                <img
                  src={bloodStain}
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "15px",
                    transform: "rotate(45deg)",
                  }}
                ></img>
              )}
            </div>
          </div>

          <TeamName>
            <div className="name">{team.name}</div>
            <div className="text">{team.script}</div>
          </TeamName>
        </TeamBlock>
      );
    });
    const bigRoundBlock = item.map((team, i) => {
      if (i === 0) {
        return "";
      }
      return (
        <div className="bigContainer" key={team.id}>
          <RoundImgContainer height="220px">
            <img
              src={require(`../images/schedule/${team.backgroundImage}`)}
              alt="img"
            />
          </RoundImgContainer>
          <br />
          {team.script}
          <div className="name">{team.name}</div>
        </div>
      );
    });
    const SquareBlocks = item.map((team, i) => {
      if (i === 0) {
        return "";
      }
      return (
        <div className="bigContainer" key={team.id}>
          <SquareImgContainer width="70%" height="220px">
            <img
              src={require(`../images/schedule/${team.backgroundImage}`)}
              alt="img"
            />
          </SquareImgContainer>
          <br />
          {team.script}
          <div className="name">{team.name}</div>
        </div>
      );
    });
    if (item.length > 1) {
      return (
        <div className="timeBox" key={item.id} style={{ position: "relative" }}>
          <div className="time" style={{ color: "#DA0404", fontSize: "20px" }}>
            {item[0]}
          </div>
          {item[1] && item[1].type === "연예인 공연"
            ? SquareBlocks
            : item.length > 3
            ? roundBlocks
            : bigRoundBlock}
        </div>
      );
    } else {
      return "";
    }
  });
  const dataArray = [
    "9.19 Mon",
    "9.20 Tue",
    "9.21 Wed",
    "9.22 Thu",
    "9.23 Fri",
  ];
  useEffect(() => {
    setNewData();
  }, [selectedDay]);
  return (
    <MainScheduleDiv>
      <div
        style={{
          margin: "0px auto",
          position: "absolute",
          zIndex: "0",
          height: "400px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.67)",
        }}
      ></div>
      <DayContainerDiv
        style={{ fontSize: "22px", zIndex: "1", position: "relative" }}
      >
        {/* 요일을 추가, onclick event는 parameter 전달을 위해 화살표 함수로 구현 */}
        {pushDayDiv(selectedDay, (e) => {
          dayOnClick(setSelectedDay, e);
        })}
      </DayContainerDiv>
      <div
        className="today"
        style={{ zIndex: "1", position: "relative", fontSize: "22px" }}
      >
        {
          dataArray[
            ["일", "월", "화", "수", "목", "금", "토"].indexOf(selectedDay) - 1
          ]
        }
      </div>
      {monArrData ? (
        <CgBoxStyle style={{ zIndex: "1", position: "relative" }}>
          <div className="title">청년광장 기청제</div>
          <div className="bigContainer" key={monArrData.id}>
            <RoundImgContainer height="220px" style={{ margin: "0px auto" }}>
              <img
                src={require(`../images/schedule/${monArrData.backgroundImage}`)}
                alt="img"
              />
            </RoundImgContainer>
            <br />
            {monArrData.script}
            <div className="name">{monArrData.name}</div>
          </div>
        </CgBoxStyle>
      ) : (
        <></>
      )}
      {CgBoxList.length > 0 && (
        <CgBoxStyle style={{ zIndex: "1", position: "relative" }}>
          <div className="title">청년광장</div>
          {CgBoxList}
        </CgBoxStyle>
      )}
      {DwData.flat().length > 7 && (
        <DwBoxStyle style={{ zIndex: "1", position: "relative" }}>
          <div className="title">대운동장</div>
          {DwBoxList}
        </DwBoxStyle>
      )}
      {CgBoxList.length < 1 && DwData.flat().length <= 7 && (
        <div className="noResult" style={{ zIndex: "1", position: "relative" }}>
          "오늘은 공연이 없어요"
        </div>
      )}
      {/* {pushData(
        schedules,
        ScheduleComponentDiv,
        selectedDay,
        setShowModal,
        setSelectedID,
        scrollToCG,
        scrollToDW,
        onMoveToCG,
        onMoveToDW
      )} */}
    </MainScheduleDiv>
  );
};

export default Schedule;
