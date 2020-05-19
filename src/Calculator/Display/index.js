import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Own components
import DarkModeIcon from "../../Shared/DarkIcon";
import LightModeIcon from "../../Shared/LightIcon";

// Utils
import { formatNumber } from "../../Shared/Utils";

const ContainerDisplay = styled.div`
  background-color: ${props => {
    if(props.theme.theme === "dark") { return "#000" }
    else if(props.theme.theme === "light") { return "#FFF" }
  }};
  color: ${props => {
    if(props.theme.theme === "dark") { return "#FFF" }
    else if(props.theme.theme === "light") { return "#00" }
  }};
  text-align: right;
  font-weight: 200;
  flex: 0 0 auto;
  width: 100%;

  & > div {
    display: inline-flex;
  }
`;

const Value = styled.div`
  font-size: 2.5rem;
  /* padding: 0.2rem 0.7rem 0.1rem 0.5rem; */
  width: 90%;
  justify-content: flex-end;
  margin-right: 0.2rem;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(160deg);
  }

  75% {
    transform: rotate(350deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const ContainerIcon = styled.div`
  width: 7%;
  align-items: stretch;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  top: -22px;
  &:hover{
    cursor: pointer;
    animation: ${rotate} 2s linear infinite;
  }
`;

const Display = props => {
  const { result, changeTheme } = props;
  const widthDevice = window.innerWidth;

  const [darkMode, setDarkMode] = useState(false);

  const handleClickMode = () => {
    setDarkMode(!darkMode);
    changeTheme(!darkMode);
  };

  useEffect(() => {
    const valueElement = document.getElementById('result');
    console.log("value", valueElement);
    let valueLength = result.length;
  }, [result]);

  return (
    <ContainerDisplay>
      <ContainerIcon onClick={handleClickMode}>
        {
          darkMode ? (
            <LightModeIcon/>
          ) : <DarkModeIcon />
        }
      </ContainerIcon>
      <Value id="result">{formatNumber(result)}</Value>
    </ContainerDisplay>
  )
}

export default Display;