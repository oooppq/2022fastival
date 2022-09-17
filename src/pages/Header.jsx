import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderDiv, HeaderLogo, Nav, FlexUl, Li } from "../styledComponent";
import logo from "../images/header/header-logo.png";

const Header = () => {
  // nav의 요소들을 클릭하면 각각의 url로 navigate
  const navigate = useNavigate();
  const navOnClick = (e) => {
    if (e.target.tagName === "IMG") {
      navigate("/");
    } else {
      const text = e.target.innerText;
      if (text === "플리마켓/마당") {
        navigate("/flea");
      } else if (text === "푸드트럭") {
        navigate("/food");
      } else if (text === "공연일정") {
        navigate("/schedule");
      }
    }
  };

  // nav에 들어갈 요소들을 추가해줌
  // 각각의 url에 진입하면 해당하는 menu component의 background가 red가 되도록 해놓음
  // 핏자국 background image 갖도록 수정 필요
  const NavLi = (props) => {
    // 현재 url의 뒷부분만 slice
    const nowUrl = document.location.href.split("/").slice(-1)[0];

    // 현재 url과 진입한 메뉴를 매칭하여 background color 설정
    if (nowUrl === "flea" && props.text === "플리마켓/마당") {
      return (
        <Li style={{ backgroundColor: "red" }} onClick={props.onClick}>
          {props.text}
        </Li>
      );
    }
    if (nowUrl === "food" && props.text === "푸드트럭") {
      return (
        <Li style={{ backgroundColor: "red" }} onClick={props.onClick}>
          {props.text}
        </Li>
      );
    }
    if (nowUrl === "schedule" && props.text === "공연일정") {
      return (
        <Li style={{ backgroundColor: "red" }} onClick={props.onClick}>
          {props.text}
        </Li>
      );
    }
    return <Li onClick={props.onClick}>{props.text}</Li>;
  };

  return (
    <HeaderDiv>
      <HeaderLogo onClick={navOnClick} src={logo}></HeaderLogo>
      <Nav>
        <FlexUl>
          <NavLi text="플리마켓/마당" onClick={navOnClick}></NavLi>
          <NavLi text="푸드트럭" onClick={navOnClick}></NavLi>
          <NavLi text="공연일정" onClick={navOnClick}></NavLi>
        </FlexUl>
      </Nav>
    </HeaderDiv>
  );
};

export default Header;
