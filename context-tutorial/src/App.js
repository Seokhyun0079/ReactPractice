import React from "react";
import ColorBox from "./contexts/colorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./contexts/SelectColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
