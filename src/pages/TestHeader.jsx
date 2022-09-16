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

  const handleNavLi = (e) => {
    navOnClick(e);
  };

  // nav에 들어갈 요소들을 추가해줌
  // 각각의 url에 진입하면 해당하는 menu component의 background가 red가 되도록 해놓음
  // 핏자국 background image 갖도록 수정 필요

  return (
    <HeaderDiv>
      <HeaderLogo onClick={navOnClick} src={logo}></HeaderLogo>
      <Nav>
        <FlexUl>
          <Li onClick={handleNavLi}>플리마켓/마당</Li>
          <Li onClick={handleNavLi}>푸드트럭</Li>
          <Li onClick={navOnClick}>공연일정</Li>
        </FlexUl>
      </Nav>
    </HeaderDiv>
  );
};

export default Header;
