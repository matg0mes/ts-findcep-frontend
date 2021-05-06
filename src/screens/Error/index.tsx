import { ReactNode } from "react";

import { Container } from "./styles";

interface ErrorProps {
  children: ReactNode;
}

function Error({ children }: ErrorProps) {
  return (
    <Container>
      <h1>Error</h1>
      {children}
    </Container>
  );
}

export default Error;
