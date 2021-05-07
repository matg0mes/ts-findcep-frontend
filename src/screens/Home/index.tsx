import { Container, Input, Button, Form, Image } from "./styles";

import logo from "../../assets/images/logo.png";

function Home() {
  return (
    <Container>
      <Form>
        <Image src={logo} />
        <Input placeholder="Digite seu CEP" />
        <Button>Buscar CEP</Button>
      </Form>
    </Container>
  );
}

export default Home;
