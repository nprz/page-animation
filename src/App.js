import React, { useState } from "react";

// Style
import styled from "styled-components";

import GradientBlock from "./GradientBlock";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

function App() {
  const [enter, setEnter] = useState(false);

  function handleClick() {
    setEnter(true);
  }

  return (
    <>
      <Container>
        <button onClick={handleClick}>click</button>
      </Container>
      <GradientBlock setEnter={setEnter} enter={enter} />
    </>
  );
}

export default App;
