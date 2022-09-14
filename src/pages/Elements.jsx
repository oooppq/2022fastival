import {
  EventHeaderDiv,
  EventTitleDiv,
  EventDateDiv,
  EventPosterDiv,
  FoodCard,
  FoodCardNumber,
  FoodCardDetail,
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
    <FoodCard
      onClick={() => {
        props.setShowModal(true);
        props.setSelectedID(props.data.id);
      }}
    >
      <FoodCardNumber><p>{props.data.id}</p></FoodCardNumber>
      {props.data.name}
      <FoodCardDetail>자세히</FoodCardDetail>
    </FoodCard>
  );
};

export const ScheduleComponentDiv = (props) => {
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
