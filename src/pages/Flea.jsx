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
      {/* 요일을 추가, onclick event는 parameter 전달을 위해 화살표 함수로 구현 */}
      <div
        style={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <div
          style={{
            margin: "0px auto",
            position: "absolute",
            zIndex: "0",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.67)",
          }}
        ></div>
        <div
          style={{
            postion: "relative",
            zIndex: "5",
            textAlign: "center",
            width: "100%",
            fontSize: "20px",
            marginBottom: "5px",
          }}
        >
          <span>플리마켓 지도</span>
          <p style={{ margin: "5px 0px", fontSize: "12px" }}>
            Mon~Fri (10:00~22:00)
          </p>
        </div>
      </div>

      <div>
        <div
          style={{
            width: "320px",
            backgroundImage: `url(${fleamap})`,
            backgroundSize: "cover",
            height: "250px",
            position: "relative",
            margin: "25px auto",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: "0px",
              top: "-25px",
            }}
          >
            {dayList.map((day) => {
              return (
                <div
                  key={day}
                  style={{
                    textAlign: "right",
                    marginLeft: "15px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      zIndex: "3",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onClick={setDayHandler}
                  >
                    {day}
                  </div>
                  {currentDay === day ? (
                    <FleaBlood src={Blood}></FleaBlood>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>

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
      </div>

      {/* 데이터 추가 */}
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
