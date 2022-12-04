import React from "react";
import "./App.less";

import LayoutContainer from "./containers/LayoutContainer";
import Routing from "./Routing";

function App() {
  return (
    <>
      <LayoutContainer>
        <Routing />
      </LayoutContainer>
    </>
  );
}

export default App;
