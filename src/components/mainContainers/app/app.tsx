import React from "react";
import {
  ThemeProvider,
  createTheme,
  Arwes,
  SoundsProvider,
  createSounds,
} from "arwes";
import { theme } from "./theme/theme";
import { sounds } from "./sounds/soundsConfig";
import Main from "./main";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={createTheme()}>
        <SoundsProvider sounds={createSounds(sounds)}>
          <Arwes>
            <Main />
          </Arwes>
        </SoundsProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
