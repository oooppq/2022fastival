import React, { useState } from "react";
import { fleas } from "../data";
import FleaModal from "./FleaModal";
import {
  DayContainerDiv,
  Map,
  FleaMapContainerMon,
  FleaMapContainerThr,
  FleaMapTableContainer,
  FleaBlood,
  FleaEachDay,
} from "../styledComponent";
import { findData } from "../utils";
import { FleaComponentDiv } from "./Elements";
import fleamap from "../images/flea/flea_map.png";
import MapTable from "./MapTable";
import Blood from "../images/blood.png";

const Flea = () => {
  // 요일 선택을 반영하기 위해 useState로 구현
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
  const dayList = ["월~수", "목~금"];
  const [currentDay, setCurrentDay] = useState("월~수");
  const setDayHandler = (event) => {
    const nowDay = event.target.innerText;
    setCurrentDay(nowDay);
  };

  return (
    <>
      <DayContainerDiv>
        {/* 요일을 추가, onclick event는 parameter 전달을 위해 화살표 함수로 구현 */}
        {dayList.map((day) => {
          return (
            <div style={{ marginRight: "10px", position: "relative" }}>
              <FleaEachDay
                style={{ zIndex: "3", position: "relative", cursor: "pointer" }}
                onClick={setDayHandler}
              >
                {day}
              </FleaEachDay>
              {currentDay === day ? <FleaBlood src={Blood}></FleaBlood> : <></>}
            </div>
          );
        })}
      </DayContainerDiv>
      <div style={{ position: "relative" }}>
        <Map src={fleamap}></Map>
        {currentDay === "월~수" ? (
          <FleaMapContainerMon>
            {fleas.map((flea) => {
              return currentDay === flea.date ? (
                <MapTable
                  key={flea.name}
                  {...flea}
                  setShowModal={setShowModal}
                  setSelectedID={setSelectedID}
                  Styled={FleaMapTableContainer}
                />
              ) : (
                <></>
              );
            })}
          </FleaMapContainerMon>
        ) : (
          <FleaMapContainerThr>
            {fleas.map((flea) => {
              return currentDay === flea.date ? (
                <MapTable
                  key={flea.name}
                  {...flea}
                  setShowModal={setShowModal}
                  setSelectedID={setSelectedID}
                  Styled={FleaMapTableContainer}
                />
              ) : (
                <></>
              );
            })}
          </FleaMapContainerThr>
        )}
      </div>

      {/* 데이터 추가 */}
      {/* {pushData(
        fleas,
        FleaComponentDiv,
        selectedDay,
        setShowModal,
        setSelectedID
      )} */}
      {fleas.map((flea) => {
        return currentDay === flea.date ? (
          <FleaComponentDiv
            key={flea.id}
            data={flea}
            setShowModal={setShowModal}
            setSelectedID={setSelectedID}
          >
            {flea.name}
          </FleaComponentDiv>
        ) : (
          <></>
        );
      })}

      {showModal && (
        <FleaModal
          setShowModal={setShowModal}
          data={findData(fleas, selectedID)}
          type={"flea"}
        ></FleaModal>
      )}
    </>
  );
};

export default Flea;
