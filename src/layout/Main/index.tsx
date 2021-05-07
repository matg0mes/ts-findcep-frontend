import { ReactNode } from "react";

import { Container } from "./styles";

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}

export default Main;
