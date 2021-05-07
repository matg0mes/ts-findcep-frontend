import { Container, Image } from "./styles";

import NOT_FOUND from "../../assets/images/NOT_FOUND.png";

function Error() {
  return (
    <Container>
      <Image src={NOT_FOUND} />
    </Container>
  );
}

export default Error;
