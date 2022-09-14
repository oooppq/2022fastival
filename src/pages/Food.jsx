import React, { useState } from "react";
import { foods } from "../data";
import Modal from "./Modal";
import { DayContainerDiv, FoodCard, FoodMap } from "../styledComponent";
import {
  dayConverter,
  pushDayDiv,
  dayOnClick,
  getDefaultDay,
  pushData,
  findData,
} from "../utils";
import { FoodComponentDiv } from "./Elements";

// default로 설정할 요일을 지정
let defaultDay = getDefaultDay();

const Food = () => {
  // 요일 선택을 반영하기 위해 useState로 구현
  const [selectedDay, setSelectedDay] = useState(dayConverter(defaultDay));
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
  return (
    <>
      <DayContainerDiv>
        {/* 요일을 추가, onclick event는 parameter 전달을 위해 화살표 함수로 구현 */}
        {pushDayDiv(selectedDay, (e) => {
          dayOnClick(setSelectedDay, e);
        })}
      </DayContainerDiv>
      <FoodMap></FoodMap>
      {/* 데이터 추가 */}
      
      
      {pushData(
        foods,
        FoodComponentDiv,
        selectedDay,
        setShowModal,
        setSelectedID
      )}
      
      
     
      
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          data={findData(foods, selectedID)}
        ></Modal>
      )}
    </>
  );
};

export default Food;
