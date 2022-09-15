import {
  EventHeaderDiv,
  EventTitleDiv,
  EventDateDiv,
  EventPosterDiv,
} from "../styledComponent";
import {
  ScheduleSpan,
  Scheduleimg,
  ScheduleimgBox,
  Schedulenametag
} from "../styledComponent";

export const EventComponentDiv = (props) => {
  return (
    <div
      key={props.data.id}
      onClick={() => {
        props.setShowModal(true);
        props.setSelectedID(props.data.id);
      }}
    >
      <EventHeaderDiv>
        <EventTitleDiv>{props.data.name}</EventTitleDiv>
        <EventDateDiv>{props.data.date}</EventDateDiv>
      </EventHeaderDiv>
      <EventPosterDiv>포스터 들어갈 자리에옹</EventPosterDiv>
    </div>
  );
};

export const FleaComponentDiv = (props) => {
  return (
    <div
      onClick={() => {
        props.setShowModal(true);
        props.setSelectedID(props.data.id);
      }}
    >
      {props.data.name}
    </div>
  );
};

export const FoodComponentDiv = (props) => {
  return (
    <div
      onClick={() => {
        props.setShowModal(true);
        props.setSelectedID(props.data.id);
      }}
    >
      {props.data.name}
    </div>
  );
};

export const ScheduleComponentDiv = (props) => {
  let index = 0;
  let content = null;
  if (index == 0) {
    content = props.data.date;
  }
  return (
    <div
      onClick={() => {
        props.setShowModal(true);
        props.setSelectedID(props.data.id);
      }}
    >

      {/* 날짜 */}
      <p>{content}</p>
      <ScheduleimgBox>
        <Scheduleimg>
          <img src={props.data.backgroundImage} alt="backgroundImage" width="100%"/>
        </Scheduleimg>
        <Schedulenametag>{props.data.name} </Schedulenametag>
      </ScheduleimgBox>


    </div>
  );
};
