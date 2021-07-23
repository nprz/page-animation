This would probably make more sense as a NPM package. Which Maybe one day it will be.
To use: 

```
import useGradientBlock from "./GradientBlock";

function App() {
  const { GradientBlock, setEnter, enter } = useGradientBlock();

  function handleClick() {
    setEnter(true);
  }

  return (
    <>
      <div> Hello world </div>
      <GradientBlock enter={enter} setEnter={handleClick} title="Hello World" />
    </>
  )
}
```