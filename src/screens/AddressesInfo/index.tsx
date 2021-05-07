import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findAll, findByCep } from "../../services/address";

import {
  Container,
  FeedBackWrapper,
  CardsWrapper,
  ImageIcon,
  Label,
  Content,
  MessageFailed,
  WrapperLoader,
  MessageSuccess,
  Card,
} from "./styles";

import Loader from "react-spinners/BeatLoader";

import failed from "../../assets/images/failed.png";
import success from "../../assets/images/success.png";
import { Address } from "../../parsers/Address";
import { AddressList } from "../../parsers/AddressList";

function AddressesInfo() {
  const [addresses, setAdresses] = useState([]);
  const [currentAddress, setCurrentAdress] = useState({});
  const [errorAddres, setErrorAddress] = useState(false);
  const [loading, setLoading] = useState(true);

  const { cep } = useParams();

  const searchAddress = async () => {
    try {
      const address = await findByCep(cep);
      setCurrentAdress(address);
      setLoading(false);
    } catch (err) {
      setErrorAddress(true);
      setLoading(false);
    }
  };

  const searchAllAddress = async () => {
    const addresses = await findAll();
    setAdresses(addresses);
  };

  const renderInfos = () => {
    searchAddress();
    searchAllAddress();
  };

  const renderFeedBack = () => {
    if (errorAddres) {
      return (
        <FeedBackWrapper>
          <ImageIcon src={failed} />
          <MessageFailed>Endereço não localizado</MessageFailed>
        </FeedBackWrapper>
      );
    }

    const address = new Address(currentAddress);

    return (
      <FeedBackWrapper>
        <ImageIcon src={success} />
        <MessageSuccess>
          {`${address.street}, ${address.neighborhood}`} <br />{" "}
          {`${address.city} - ${address.state}`}
        </MessageSuccess>
      </FeedBackWrapper>
    );
  };

  const renderCards = () => {
    const listAddress = new AddressList(addresses);

    return (
      <>
        {listAddress.items.map((element) => (
          <Card>
            {`${element.street}, ${element.neighborhood}`} <br />{" "}
            {`${element.city} - ${element.state}`}
          </Card>
        ))}
      </>
    );
  };

  useEffect(renderInfos, []);

  return (
    <Container>
      {loading ? (
        <WrapperLoader>
          <Loader size={50} color="#f57c00;" loading={loading} />
        </WrapperLoader>
      ) : (
        <>
          {renderFeedBack()}
          <Content>
            <Label>ENDEREÇOS BUSCADOS RECENTEMENTE</Label>
            <CardsWrapper>{renderCards()}</CardsWrapper>
          </Content>
        </>
      )}
    </Container>
  );
}

export default AddressesInfo;
