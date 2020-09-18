import React, { useState, useContext } from "react";
import {
  ThemeProvider,
  createTheme,
  Arwes,
  SoundsProvider,
  createSounds,
} from "arwes";
import { sounds } from "./sounds/soundsConfig";
import Main from "./main";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "store";
// import { store } from "store";

import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={createTheme()}>
          <SoundsProvider sounds={createSounds(sounds)}>
            <Arwes>
              <Main />
            </Arwes>
          </SoundsProvider>
        </ThemeProvider>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
