import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedBackWrapper = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 45%;
  }
`;

export const CardsWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
`;

export const WrapperLoader = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

export const ImageIcon = styled.img`
  border: 5px solid #f57c00;
  border-radius: 50%;
  box-shadow: 0 0 5px;
  height: 200px;
  margin: 10px 50px;

  @media only screen and (max-width: 768px) {
    height: 150px;
  }
`;

export const MessageFailed = styled.h2`
  font-size: 50px;
  color: #01579b;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const MessageSuccess = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #01579b;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Label = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #01579b;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
`;
