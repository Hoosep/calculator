import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";

// Own components
import ButtonsPanel from "./Calculator/ButtonsPanel/";
import Display from "./Calculator/Display/";

// Controller
import Calculate from "./Calculator/Calculate";

const ContainerCalculator = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
`;

const App = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null
  });
  const [theme, setTheme] = useState("light");
  
  const handleClickChangeTheme = darkMode => {
    if(darkMode) setTheme("dark");
    else setTheme("light");
  };
  
  const handleClickButtonPanel = buttonName => {
    let result = Calculate(data, buttonName);
    // Merge object.
    setData({ ...data, ...result });
  }
  
  return (
    <ThemeProvider theme={{theme}}>
      <ContainerCalculator>
        <Display result={data.next || data.total || "0"} changeTheme={handleClickChangeTheme}/>
        <ButtonsPanel clickHandler={handleClickButtonPanel} />
      </ContainerCalculator>
    </ThemeProvider>
  )
}

export default App;