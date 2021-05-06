import { ReactNode } from 'react';

import { Container } from './styles';

interface AddressesInfoProps {
  children: ReactNode;
}

function AddressesInfo({ children }: AddressesInfoProps) {
  return (
    <Container>
      <h1>AddressesInfo</h1>
      {children}
    </Container>
  );
};

export default AddressesInfo;
