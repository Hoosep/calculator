import React from "react";
import styled from "styled-components";

const ContainerButton = styled.div`
  display: inline-flex;
  width: ${props => props.longer ? "50%" : "25%" };
  flex: 1 0 auto;
  &:last-child button {
    margin-right: 0;
  }
`;

const ButtonStyled = styled.button`
  background-color: ${props => {
    if(props.theme.theme === "dark") { 
      if(props.orange) return "#101020"
      else return "#505050" 
    } else {
      if(props.orange) return "#f5923e";
      else return "#e0e0e0" 
    }
  }};
  color: ${props => {
    if(props.theme.theme === "dark") { 
      return "#fff";
    } else {
      if(props.orange) return "#fff";
      else return "#000" 
    }
  }};
  border: 0;
  border-radius: 0;
  font-size: 1.5rem;
  margin: 0 1px 0 0;
  flex: 1 0 auto;
  padding: 0;
  font-family: 'Rubik', sans-serif;

  :focus{
    outline: none;
    box-shadow: ${props => {
      if(props.theme.theme === "dark") return "0 0 0 1px #fff inset";
      else return "0 0 0 1px #000 inset";
    }};
  }
`;

const Button = props => {
  const { text, operation, longer } = props;

  return (
    <ContainerButton longer={longer}>
      <ButtonStyled orange={operation}>
        {text}
      </ButtonStyled>
    </ContainerButton>
  );
}

export default Button;