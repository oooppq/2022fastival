import React from "react";
import {
  EventHeaderDiv,
  EventTitleDiv,
  EventDateDiv,
  EventPosterDiv,
} from "../styledComponent";

const Event = (props) => {
  return (
    <>
      <EventHeaderDiv>
        <EventTitleDiv>{props.title}</EventTitleDiv>
        <EventDateDiv>{props.date}</EventDateDiv>
      </EventHeaderDiv>
      <EventPosterDiv>포스터 들어갈 자리에옹</EventPosterDiv>
    </>
  );
};

export default Event;
