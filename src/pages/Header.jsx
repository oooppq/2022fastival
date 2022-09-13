import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderDiv, HeaderLogo, Nav, FlexUl, Li } from "../styledComponent";

const Header = () => {
  const navigate = useNavigate();
  const navOnClick = (e) => {
    if (e.target.tagName === "DIV") {
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

  const NavLi = (props) => {
    return <Li onClick={props.onClick}>{props.text}</Li>;
  };

  return (
    <HeaderDiv>
      <HeaderLogo onClick={navOnClick}>지금우리서강은</HeaderLogo>
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
