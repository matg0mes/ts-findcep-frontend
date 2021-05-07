import { Container, Input, Button, Form, Image } from "./styles";

import logo from "../../assets/images/logo.png";
import { useState } from "react";

function Home() {
  const [postalCode, setPostalCode] = useState("");

  const handleChange = ({ target: { value } }) => {
    if (value.length <= 9) {
      setPostalCode(value.replace(/^(\d{5})(\d{3})+?$/, "$1-$2"));
    }
  };

  return (
    <Container>
      <Form>
        <Image src={logo} />
        <Input
          value={postalCode}
          onChange={handleChange}
          placeholder="Digite seu CEP"
        />
        <Button disabled={true}>Buscar CEP</Button>
      </Form>
    </Container>
  );
}

export default Home;
