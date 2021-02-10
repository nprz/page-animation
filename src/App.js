import React from "react";

// Style
import styled from "styled-components";

import useGradientBlock from "./GradientBlock";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

function App() {
  const { GradientBlock, setEnter, enter } = useGradientBlock();

  function handleClick() {
    setEnter(true);
  }

  return (
    <>
      <Container>
        <button onClick={handleClick}>click</button>
      </Container>
      <GradientBlock enter={enter} setEnter={setEnter} />
    </>
  );
}

export default App;
