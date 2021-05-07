import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 50%;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    width: 80%;
  }
`;
