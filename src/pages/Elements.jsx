import {
  EventHeaderDiv,
  EventTitleDiv,
  EventDateDiv,
  EventPosterDiv,
  DescCard,
  DescCardName,
  DescCardNumber,
  DescCardDetail,
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
    // <div
    //   onClick={() => {
    //     props.setShowModal(true);
    //     props.setSelectedID(props.data.id);
    //   }}
    // >
    //   {props.data.name}
    // </div>
    <DescCard
    onClick={() => {
      props.setShowModal(true);
      props.setSelectedID(props.data.id);
    }}
  >
    <DescCardNumber><div>{props.data.id}</div></DescCardNumber>
    <DescCardName>{props.data.name}</DescCardName>
    <DescCardDetail>자세히</DescCardDetail>
  </DescCard>
  );
};

export const FoodComponentDiv = (props) => {
  return (
    <DescCard
      onClick={() => {
        props.setShowModal(true);
        props.setSelectedID(props.data.id);
      }}
    >
      <DescCardNumber><div>{props.data.id}</div></DescCardNumber>
      <DescCardName>{props.data.name}</DescCardName>
      <DescCardDetail>자세히</DescCardDetail>
    </DescCard>
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
