import logo from "../../assets/images/logo.png";
import history from "../../services/history";
import { useState } from "react";
import { Container, Input, Button, Form, Image, MessageError } from "./styles";

function Home() {
  const [postalCode, setPostalCode] = useState("");
  const [messageError, setMesssageError] = useState("");
  const [error, setError] = useState(false);

  const handleChange = ({ target: { value } }) => {
    if (value.length <= 9) {
      setPostalCode(
        value.replace(/[^0-9]+/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
      );
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (postalCode.length === 9) {
      history.push(`/address/${postalCode.replace(/[^0-9]+/g, "")}`);
    } else {
      setMesssageError("Digite um CEP válido");
      setError(true);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleClick}>
        <Image src={logo} />
        <Input
          value={postalCode}
          onChange={handleChange}
          placeholder="Digite seu CEP"
        />
        <Button onClick={handleClick}>Buscar CEP</Button>
        <MessageError visible={error}>{messageError}</MessageError>
      </Form>
    </Container>
  );
}

export default Home;
