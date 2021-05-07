import styled, { css } from "styled-components";

interface IMessageError {
  visible: Boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  text-align: center;

  &::placeholder {
    color: #999;
    text-align: center;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  border: 0;
  border-radius: 4px;
  height: 48px;
  font-size: 16px;
  background: #f57c00;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 200px;
`;

export const MessageError = styled.p`
  color: #b71c1c;
  font-size: 18px;

  ${({ visible }: IMessageError) =>
    visible &&
    css`
      position: relative;
    `};
`;
