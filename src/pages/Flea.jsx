import React, { useState } from "react";
import { fleas } from "../data";
import { DayContainerDiv } from "../styledComponent";
import {
  dayConverter,
  pushDayDiv,
  dayOnClick,
  getDefaultDay,
  getData,
} from "../utils";

// default로 설정할 요일을 지정
let defaultDay = getDefaultDay();

const Flea = () => {
  // 요일 선택을 반영하기 위해 useState로 구현
  const [selectedDay, setSelectedDay] = useState(dayConverter(defaultDay));

  return (
    <>
      <DayContainerDiv>
        {/* 요일을 추가, onclick event는 parameter 전달을 위해 화살표 함수로 구현 */}
        {pushDayDiv(selectedDay, (e) => {
          dayOnClick(setSelectedDay, e);
        })}
      </DayContainerDiv>

      {/* 데이터 추가 */}
      {getData(fleas, selectedDay)}
    </>
  );
};

export default Flea;
