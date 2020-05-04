import React, { useEffect } from "react";
import styled from "styled-components";

//Own components
import Button from "./Button";

const ContainerButtonsPanel = styled.div`
  background-color: #858694;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 0 auto;
`;

const Row = styled.div`
  width: 100%;
  margin-bottom: 1px;
  flex: 1 0 auto;
  display: flex;
`;

const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                     '/', '*', 'x', '-', '+', '=', 'enter', '%', '.', 'c'];

const ButtonsPanel = props => {
  const { clickHandler } = props;

  const handleClick = e => {
    const { textContent } = e.target;
    clickHandler(textContent)
  }

  const handleKeyPress = e => {
    let keyName = e.key.toLowerCase();
    
    if(keysAllowed.includes(keyName)){
      if(keyName === "enter") keyName = "=";
      if(keyName === "/") keyName = "÷";
      if(keyName === "*") keyName = "x";
      if(keyName === "c") keyName = "AC";
      clickHandler(keyName);
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    }
  });

  return (
    <ContainerButtonsPanel onClick={handleClick}>
      <Row>
        <Button text="AC" operation />
        <Button text="+/-" operation />
        <Button text="%" operation />
        <Button text="÷" operation />
      </Row>
      <Row>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="x" operation />
      </Row>
      <Row>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" operation />
      </Row>
      <Row>
        <Button text="3" />
        <Button text="2" />
        <Button text="1" />
        <Button text="+" operation />
      </Row>
      <Row>
        <Button text="0" longer />
        <Button text="." />
        <Button text="=" operation c/>
      </Row>
    </ContainerButtonsPanel>
  );
}

export default ButtonsPanel;