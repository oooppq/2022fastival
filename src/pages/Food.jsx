import React, { useState } from "react";
import { dayConverter, foods } from "../data";
import { DayContainerDiv, DayDiv } from "../styledComponent";

let today = new Date().getDay();
let defaultDay = today > 2 ? today : 2;

const Food = () => {
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

  const getFoods = () => {
    let foodList = [];
    let i = 0;
    for (let food of foods) {
      if (dayConverter(food.day) === selectedDay) {
        foodList.push(<div key={i}>{food.name}</div>);
        i++;
      }
    }
    return foodList;
  };
  return (
    <>
      <DayContainerDiv>
        <DayDiv onClick={dayOnClick}>월</DayDiv>
        <DayDiv onClick={dayOnClick}>화</DayDiv>
        <DayDiv onClick={dayOnClick}>수</DayDiv>
        <DayDiv onClick={dayOnClick}>목</DayDiv>
        <DayDiv onClick={dayOnClick}>금</DayDiv>
      </DayContainerDiv>
      {getFoods()}
    </>
  );
};

export default Food;
