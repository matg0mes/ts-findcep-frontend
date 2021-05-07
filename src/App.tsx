import React from "react";
import { Container } from "./layout/Main/styles";
import Routes from "./routes";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <Container>
      <Routes />
      <GlobalStyles />
    </Container>
  );
}

export default App;
