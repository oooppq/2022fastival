import React, { useState } from "react";
import { schedules } from "../data";
// import Modal from "./Modal";
import {
  DayContainerDiv, MainScheduleDiv, ScheduleContainerDIv, ScheduleSpan, Scheduleimg, ScheduleimgBox, Schedulenametag,
  TeamBlock,
  TeamName,
  RoundImgContainer,
  SquareImgContainer
} from "../styledComponent";
import { ScheduleComponentDiv } from "./Elements";
import {
  dayConverter,
  pushDayDiv,
  dayOnClick,
  getDefaultDay,
  pushData,
  findData,
} from "../utils";
import redHand from "../images/redHand.png"
import backgroundImage from "../images/background.png"
import { useEffect } from "react";
import styled from "styled-components";

// default로 설정할 요일을 지정
let defaultDay = getDefaultDay();


const CgBoxStyle = styled.div`
  div{
    font-size:16px;
    margin-bottom:50px;
  }
  .title{
    font-size: 32px;
    margin:10px;
  }
`
const DwBoxStyle = styled.div`
  .title{
    font-size: 32px;
    margin:10px;
  }
  .timeBox{
    margin-bottom: 50px;
    .time{
      color:#620303;
      font-size: 24px;
      
    }
  }
  
  .bigContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:20px;
    .name{
    font-size: 20px;
  }
  }
`


const Schedule = () => {
  // 요일 선택을 반영하기 위해 useState로 구현
  //defaultDay를 하면 아무것도 안나와서 기본값을 1로 조정

  const [selectedDay, setSelectedDay] = useState(dayConverter(1));
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
  const [CgData, setCgData] = useState([])
  const [DwData, setDwData] = useState([])

  const dayData = schedules.filter((item) => dayConverter(item.day) === selectedDay);


  const setNewData = () => {
    const CGData = dayData.filter((item) => item.place === "청년광장")
    setCgData(CGData);
    const DWArray = dayData.filter((item) => item.place === "대운동장")
    const DWData = [
      ["쉬는시간"],
      ["16:00-20:00"],
      ["18:00-19:00"],
      ["19:00-21:00"],
      ["20:00-20:35"],
      ["21:00-22:00"],
      ["20:35-23:00"]
    ];

    if(DWArray){ DWArray.forEach((item) => {
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
        case "20:00-20:35":
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
      };
    })
    setDwData(DWData)}

  };

  const CgBoxList = CgData.map(
    (item) => {
      return (
        <div className="CgItem" key={item.id}>{item.name}</div>
      )
    }
  );
  const DwBoxList = DwData.map((item, i) => {
    const roundBlocks = item.map((team, i) => {
      if (i === 0) {
        return ""
      }
      return (
        <TeamBlock key={team.id} even={i % 2 === 0}>
          <RoundImgContainer height="150px" >
            <img src={team.backgroundImage} alt="img" />
          </RoundImgContainer>
          <img className="handImg" src={redHand} alt="a" />
          <TeamName>
            <div className="name">{team.name}</div>
            <div className="text">{team.script}</div>
          </TeamName>
        </TeamBlock>
      )
    })
    const bigRoundBlock = item.map((team, i) => {
      if (i === 0) {
        return ""
      }
      return (
        <div className="bigContainer" key={team.id}>
          <RoundImgContainer height="220px" >
            <img src={team.backgroundImage} alt="img" />
          </RoundImgContainer>
          <br />
          {team.script}
          <div className="name">
            {team.name}

          </div>
        </div>
      )
    })
    const SquareBlocks = item.map((team, i) => {
      if (i === 0) {
        return ""
      }
      return (
        <div className="bigContainer" key={team.id}>
          <SquareImgContainer width="70%" height="220px" >
            <img src={team.backgroundImage} alt="img" />
          </SquareImgContainer>
          <br />
          {team.script}
          <div className="name">
            {team.name}

          </div>
        </div>
      )
    })
    if (item.length > 1) {
      return (
        <div className="timeBox" key={item.id}>
          <div className="time">{item[0]}</div>
          {item[1] && item[1].type === "연예인 공연" ? SquareBlocks : item.length > 3 ? roundBlocks : bigRoundBlock}
        </div>
      )
    } else {
      return ""
    }

  })
  const dataArray = ["9.19 Mon","9.20 Tue","9.21 Wed","9.22 Thu","9.23 Fri"]
  useEffect(() => {
    setNewData()
  }, [selectedDay])
  return (
    <MainScheduleDiv>
      <DayContainerDiv>
        {/* 요일을 추가, onclick event는 parameter 전달을 위해 화살표 함수로 구현 */}
        {pushDayDiv(selectedDay, (e) => {
          dayOnClick(setSelectedDay, e);
        })}
      </DayContainerDiv>
      <div className="today">
        {dataArray[["일", "월", "화", "수", "목", "금", "토"].indexOf(selectedDay)-1]}
      </div>
      {CgBoxList.length > 0 &&
        <CgBoxStyle>
          <div className="title">청년광장</div>
          {CgBoxList}
        </CgBoxStyle>
      }
      {DwData.flat().length>7&&
      <DwBoxStyle>
        <div className="title">대운동장</div>
        {DwBoxList}
      </DwBoxStyle>}
      {CgBoxList.length<1&&DwData.flat().length<=7&&
  <div className="noResult">"오늘은 공연이 없어요"</div>
        }
      {/* {pushData(
        schedules,
        ScheduleComponentDiv,
        selectedDay,
        setShowModal,
        setSelectedID,
      )} */}
    </MainScheduleDiv>
  );
};

export default Schedule;
